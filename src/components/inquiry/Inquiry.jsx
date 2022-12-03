import React, { useEffect, useState } from "react";
import moment from "moment";
import { ImSearch } from "react-icons/im";
import api from "../../helpers/api/inquiry";
import "./inquiry.css";

const Inquiry = ({ inquiry }) => {
  const [_data, set_Data] = useState([]);
  const [search, setSearch] = useState("");
  const [newData, setNewData] = useState([]);
  const [count, setCount] = useState(0);

  const getData = async (id) => {
    try {
      const response = await api.get(`/${id}`);
      set_Data(response.data);
    } catch (err) {
      if (err.response) {
        console.log(err.responses.data);
        console.log(err.response.status);
        console.log(err.response.header);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  const getSearchData = () => {
    if (search.length >= 1) {
      const new_data = inquiry.filter(
        (i) =>
          i.email?.toLowerCase().includes(search) ||
          i.name?.toLowerCase().includes(search) ||
          i.company?.toLowerCase().includes(search)
      );
      setNewData(new_data);
      setSearch("");
      setCount(new_data.length);
    } else {
      setNewData(inquiry);
      setCount(inquiry.length);
    }
  };

  useEffect(() => {
    getSearchData();
  }, [inquiry]);

  return (
    <>
      <div className="cbs__inquiry">
        <div className="cbs__inquiry-search">
          <p>{count}</p>
          <div className="cbs__inquiry-search__form-container">
            <form action="POST" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                name="search"
                id="search"
                value={search}
                placeholder="Search..."
                onChange={(e) => (getSearchData(), setSearch(e.target.value))}
              />
              <button type="submit" onClick={() => getSearchData()}>
                <ImSearch />
              </button>
            </form>
          </div>
        </div>
        <div className="cbs__inquiry-body">
          <div className="cbs__inquiry-list">
            {newData.map((inquiry, index) => (
              <button
                className="cbs__inquiry-list__item pointer"
                key={index}
                onClick={() => getData(inquiry.id)}
              >
                <p>{inquiry.name === null ? "Unknown" : inquiry.name}</p>
                <div className="cbs__inquiry-list__info">
                  <div>{inquiry.email}</div>
                  <div>
                    {moment(inquiry.inquiry_at).startOf("hour").fromNow()}
                  </div>
                </div>
              </button>
            ))}
            {/* {search?.length >= 1 ? (
              <>
                {newData.map((inquiry, index) => (
                  <button
                    className="cbs__inquiry-list__item pointer"
                    key={index}
                    onClick={() => getData(inquiry.id)}
                  >
                    <p>{inquiry.name === null ? "Unknown" : inquiry.name}</p>
                    <div className="cbs__inquiry-list__info">
                      <div>{inquiry.email}</div>
                      <div>
                        {moment(inquiry.inquiry_at).startOf("hour").fromNow()}
                      </div>
                    </div>
                  </button>
                ))}
              </>
            ) : (
              <>
                {inquiry.map((inquiry, index) => (
                  <button
                    className="cbs__inquiry-list__item pointer"
                    key={index}
                    onClick={() => getData(inquiry.id)}
                  >
                    <p>{inquiry.name === null ? "Unknown" : inquiry.name}</p>
                    <div className="cbs__inquiry-list__info">
                      <div>{inquiry.email}</div>
                      <div>
                        {moment(inquiry.inquiry_at).startOf("hour").fromNow()}
                      </div>
                    </div>
                  </button>
                ))}
              </>
            )} */}
          </div>
          <div className="cbs__inquiry-details">
            {_data?.length == 0 ? (
              <>
                <p>Please a data to show details</p>
              </>
            ) : (
              <>
                <p>
                  <strong>From: </strong>
                  {`${
                    _data.name === null || _data.name?.length == 0
                      ? "Unknown"
                      : _data.name
                  } <${_data.email}>`}
                </p>
                <p>
                  <strong>Contact Number: </strong>
                  {`${
                    _data.contact === null || _data.contact?.length == 0
                      ? "No contact number"
                      : _data.contact
                  }`}
                </p>
                <p>
                  <strong>Company: </strong>
                  {`${
                    _data.company === null || _data.company?.length == 0
                      ? "Company wasn't provided"
                      : _data.company
                  }`}
                </p>
                <p>{`Date: ${moment(_data.inquiry_at).calendar()}`}</p>

                <div className="cbs__inquiry-details__action">
                  <button>Reply</button>
                  <button>Done</button>
                  <button>Close</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Inquiry;
