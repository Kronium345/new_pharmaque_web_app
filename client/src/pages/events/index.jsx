import axios from "axios";

import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../../components/modal";
import { TextInput } from "../../components/form";
import { useLoading } from "../../hooks";

const UpcomingEventsPage = () => {
  const navigate = useNavigate("");
  const [events, setEvents] = useState([]);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    name: "",
    topic: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState({});

  const { setLoading } = useLoading();

  useLayoutEffect(() => {
    getEvents();
  }, []);

  const handleAdd = async () => {
    const errors = validate(data);
    setErrors(errors);
    if (Object.keys(errors).length) {
      return;
    }

    const [hours, minutes] = data.time.split(":");

    const formattedTime = new Date(data.date);
    formattedTime.setHours(parseInt(hours, 10));
    formattedTime.setMinutes(parseInt(minutes, 10));

    setLoading(true);
    await axios
      .post("event/create-event", {
        name: data.name,
        topic: data.topic,
        date: data.date,
        time: data.time,
        formattedDate: formattedTime,
        formattedTime,
      })
      .then((res) => {
        setAdd(false);
        setData({
          name: "",
          topic: "",
          date: "",
          time: "",
        });
        getEvents();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleEdit = async () => {
    const errors = validate(data);
    setErrors(errors);
    if (Object.keys(errors).length) {
      return;
    }

    const [hours, minutes] = data.time.split(":");

    const formattedTime = new Date(data.date);
    formattedTime.setHours(parseInt(hours, 10));
    formattedTime.setMinutes(parseInt(minutes, 10));

    setLoading(true);
    await axios
      .put("event/update-event/" + data._id, {
        name: data.name,
        topic: data.topic,
        date: data.date,
        time: data.time,
        formattedDate: formattedTime,
        formattedTime,
      })
      .then((res) => {
        setEdit(false);
        setData({
          name: "",
          topic: "",
          date: "",
          time: "",
        });
        getEvents();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getEvents = async () => {
    setLoading(true);
    await axios
      .get("event/get-events")
      .then((res) => {
        setEvents(res.data?.events);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteEvent = async (id) => {
    setLoading(true);
    await axios
      .delete("event/delete-event/" + id)
      .then((res) => {
        getEvents();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div class="row py-2 m-0 px-0 lightgrey center mb-3">
        <button
          class="addeventbutton"
          onClick={() => {
            setAdd(true);
          }}
        >
          <img src="images/AddIcon.png" class="mediumicon" alt="icon" />
        </button>
      </div>

      <div class="row">
        <div class="col-sm-12 mb-3">
          {events.map((event) => (
            <div class="card p-4 mediumbluebg mb-2">
              <div class="row">
                <div class="col-sm-9">
                  <p class="fs-4 whitetext">{event.name}</p>
                  <p class="fs-5 whitetext">{event.topic}</p>
                  <p class="fs-5 whitetext fw-bold">
                    {formattedDate(event.formattedDate)} -{" "}
                    {formattedTime(event.formattedTime)}
                  </p>
                </div>
                <div class="col-sm-3 navybluebg borderradius center">
                  <div class="mt-4">
                    {remaningTime(event.formattedDate) > 0 && (
                      <p class="fs-3 fw-bold whitetext mb-1">
                        {remaningTime(event.formattedDate)}
                      </p>
                    )}

                    {remaningTime(event.formattedDate) === 0 && (
                      <p class="fs-3 fw-bold whitetext mb-1">Today</p>
                    )}
                    {remaningTime(event.formattedDate) < 0 && (
                      <p class="fs-3 fw-bold whitetext mb-1">Expired</p>
                    )}

                    {remaningTime(event.formattedDate) > 0 && (
                      <p class="fs-4 whitetext mt-1">day/s to go</p>
                    )}
                    {remaningTime(event.formattedDate) === 0 && (
                      <p class="fs-4 whitetext mt-1">
                        {formattedTime(event.formattedDate)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-2">
                <button
                  class="btn edit-button btn-danger me-2"
                  onClick={() => deleteEvent(event._id)}
                >
                  Delete
                </button>
                <button
                  class="btn edit-button btn-success"
                  onClick={() => {
                    setEdit(true);
                    setData(event);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={add || edit}
        handleClose={() => {
          setAdd(false);
          setEdit(false);
          setData({
            name: "",
            topic: "",
            date: "",
            time: "",
          });
          setErrors({});
        }}
        modalTitle={edit ? "Edit Event" : "Add Event"}
      >
        <TextInput
          label="Event Name"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
          name="name"
          required
          error={errors.name}
        />
        <TextInput
          label="Event Topic"
          value={data.topic}
          onChange={(e) => {
            setData({ ...data, topic: e.target.value });
          }}
          name="topic"
          required
          error={errors.topic}
        />
        <TextInput
          label="Event Date"
          value={data.date}
          onChange={(e) => {
            setData({ ...data, date: e.target.value });
          }}
          name="date"
          required
          type="date"
          error={errors.date}
        />
        <TextInput
          label="Event Time"
          value={data.time}
          onChange={(e) => {
            setData({ ...data, time: e.target.value });
          }}
          name="time"
          required
          type="time"
          error={errors.time}
        />
        <button
          class="btn btn-primary w-100"
          onClick={edit ? handleEdit : handleAdd}
        >
          {edit ? "Edit Event" : "Add Event"}
        </button>
      </Modal>
    </>
  );
};

export default UpcomingEventsPage;

const validate = (data) => {
  const errors = {};

  if (!data.name) {
    errors.name = "Name is required";
  }
  if (!data.topic) {
    errors.topic = "Topic is required";
  }
  if (!data.date) {
    errors.date = "Date is required";
  }
  if (!data.time) {
    errors.time = "Time is required";
  }

  return errors;
};

export const formattedDate = (date) => {
  if (!date) {
    return;
  }
  return new Date(date).toDateString();
};

export const formattedTime = (time) => {
  if (!time) {
    return;
  }
  // return only hours and minutes
  return new Date(time).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const remaningTime = (date) => {
  if (!date) {
    return;
  }
  const now = new Date();
  const eventDate = new Date(date);
  const diff = eventDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return days;
};
