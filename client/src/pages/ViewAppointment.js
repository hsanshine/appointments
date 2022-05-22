import React, { useEffect } from "react";
import Appointment from "../components/Appointment";
import { useHistory, useParams } from "react-router-dom";
import useHttp, { STATUS_COMPLETED, STATUS_PENDING } from "../hooks/useHttp";
import { httpGetBooking, httpCancelBooking } from "../hooks/request";
import SimpleBackdrop from "../components/BackDrop";
import { Modal } from "antd";

const ViewAppointment = () => {
  //only try to fetch if there is an id..
  const history = useHistory();
  const { id } = useParams();

  const {
    status,
    data: response,
    error,
    sendRequest,
  } = useHttp(httpGetBooking, true);

  const {
    status: cancelStatus,
    data: cancelresponse,
    error: cancelError,
    sendRequest: cancelRequest,
  } = useHttp(httpCancelBooking, true);

  useEffect(() => {
    sendRequest(id);

    return () => {
      console.log("abort request");
    };
  }, []);

  console.log(id);

  function success() {
    Modal.success({
      content: "Appointment was cancelled!",
    });
  }
  function cancellingError() {
    Modal.error({
      title: "This is an error message",
      content: "some messages...some messages...",
    });
  }
  const handleCancel = () => {
    cancelRequest(id);
    success();
    //show that you have finished cancelling...
  };

  const handleBack = () => {
    history.push("/");
  };

  if (error) {
    cancellingError();
    // return <div>{error} didnot find the appointment</div>;
  }
  return (
    <div>
      <SimpleBackdrop loading={status === STATUS_PENDING} />
      {status === STATUS_COMPLETED && (
        <Appointment
          onEdit={() => {}}
          onCancel={handleCancel}
          onBack={handleBack}
          appointmentData={response}
        />
      )}
    </div>
  );
};

export default ViewAppointment;
