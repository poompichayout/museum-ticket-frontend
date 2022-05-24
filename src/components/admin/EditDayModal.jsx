import {
  Modal,
  Button,
  Checkbox,
  Text,
  Radio,
  Grid,
  Card,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import moment from "moment";
import { useMutation } from "react-query";
import axios from "axios";

const EditDayModal = ({ visible, closeHandler, date, defaultStatus }) => {
  const [status, setStatus] = React.useState(defaultStatus.status);
  const [time, setTime] = React.useState(defaultStatus.time ?? []);
  const mutation = useMutation((payload) => {
    return axios.post("/admin/schedule", payload).then((res) => res.data);
  });

  useEffect(() => {
    setStatus(defaultStatus.status);
    setTime(defaultStatus.time ?? []);
  }, [date, defaultStatus]);

  const onApplied = () => {
    console.log(time);
    // serialize data
    const days = time.map((t) => {
      const d = new Date(date);
	  d.setUTCDate(d.getUTCDate() + 1);
      d.setUTCHours(t);
      d.setMinutes(0);
      d.setSeconds(0);
      d.setMilliseconds(0);
      return {
        datetime: d,
        status: "CLOSED",
      };
    });

    if (defaultStatus.time) {
      // ให้ดูว่าอันไหนที่ไม่มีใน time ให้ push ใส่ days สถานะ OPEN
      defaultStatus.time.forEach((hour) => {
        if (!time.includes(hour)) {
          const d = new Date(date);
		  d.setUTCFullYear(d.getUTCFullYear());
		  d.setUTCMonth(d.getUTCMonth());
		  d.setUTCDate(d.getUTCDate() + 1);
          d.setUTCHours(hour);
          d.setMinutes(0);
          d.setSeconds(0);
          d.setMilliseconds(0);
          days.push({
            datetime: d,
            status: "OPEN",
          });
        }
      });
    }
	console.log(days);
    mutation.mutate(days);
  };

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          {moment(date).format("D MMMM YYYY")}
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text>Select status</Text>
        <Radio.Group
          size="sm"
          row
          value={status}
          onChange={(value) => setStatus(value)}
        >
          <Radio value="OPEN">Open</Radio>
          <Radio value="CLOSED">Closed</Radio>
        </Radio.Group>
        <Checkbox.Group
          isDisabled={status === "OPEN"}
          isRow
          label="Select time"
          color="secondary"
          defaultValue={defaultStatus.time}
          size="sm"
          onChange={(value) => setTime([...value])}
        >
          <Grid.Container>
            {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((e) => (
              <Grid xs={3} key={e}>
                <Checkbox value={e}>{`${String(e).padStart(
                  2,
                  "0"
                )}:00`}</Checkbox>
              </Grid>
            ))}
          </Grid.Container>
        </Checkbox.Group>
        {mutation.isError && (
          <Card color="error">
            <Text>{mutation.error.response.data.message}</Text>
          </Card>
        )}
		{mutation.isSuccess && (
          <Card color="success">
            <Text>{mutation.data.message}</Text>
          </Card>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={closeHandler}>
          Cancel
        </Button>
        <Button auto onClick={onApplied}>
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditDayModal;
