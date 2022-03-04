import React from "react";
import { TailModal } from "../../components";
import { Group, Select, Input, Button, Icon } from "elementz";
import emailjs from "emailjs-com";

const listOfLGAs = [
  "Aboh Mbaise",
  "Ahiazu Mbaise",
  "Ehime Mbano",
  "Ezinihitte Mbaise",
  "Ideato North",
  "Ideato South",
  "Ihitte/Uboma",
  "Ikeduru",
  "Isiala Mbano",
  "Isu",
  "Izombe",
  "Mbaitoli",
  "Ngor Okpala",
  "Njaba",
  "Nkwerre",
  "Nwangele",
  "Obowo",
  "Oguta",
  "Ohaji/Egbema",
  "Okigwe",
  "Onuimo",
  "Orlu",
  "Orsu",
  "Oru East",
  "Oru West",
  "Owerri Municipal",
  "Owerri North",
  "Owerri West",
];

const Amount = () => {
  const [amount, setAmount] = React.useState(400);
  const [currency, setCurrency] = React.useState("NGN");
  return (
    <div className="my-5 h-[60px] w-2/5 bg-white rounded-md px-5 py-4 flex gap-5 items-center justify-center shadow-sm">
      <h3 className="flex">Amount - {amount}</h3>
      <h3 className="flex">Currency - {currency}</h3>
    </div>
  );
};

const Single = () => {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [agent, setAgent] = React.useState({
    surName: "",
    firstName: "",
    otherNames: "",
    school: "",
    dob: "",
    lga: "",
    gender: "",
    yearOfExam: Date.now(),
  });
  const formRef = React.useRef();
  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      // State
      if (agent.firstName === "") {
        console.log("First Name is required");
        return;
      }
      if (agent.middleName === "") {
        console.log("Middle Name is required");
        return;
      }
      if (agent.lastName === "") {
        console.log("Last Name is required");
        return;
      }
      if (agent.phone === "") {
        console.log("Phone is required");
        return;
      }
      if (agent.email === "") {
        console.log("Email is required");
        return;
      }
      if (agent.address === "") {
        console.log("Address is required");
        return;
      }
      setLoading(true);
      console.log(agent);
    },
    [agent]
  );

  React.useEffect(() => {
    if (loading === false) {
      return;
    }
    emailjs
      .sendForm(
        "service_6ugtvrc",
        "template_wp8e9oz",
        formRef.current,
        "user_EEy9xHcbi6czUaobwjVRE"
      )
      .then((res) => {
        setLoading(false);
        console.log(res.text);
        if (res.text === "OK") {
          setStatus(res.text);
          setSubmitted(true);
          setTitle("Thank You");
          setMessage("We will get back to you as soon as possible.");
        }
      })
      .catch((err) => {
        console.log(err);
        setStatus(err.text);
        setLoading(false);
        setSubmitted(true);
        setTitle("Oops! Failure");
        setMessage("Something went wrong. Please try again later.");
      });
  }, [loading]);

  const [year, setYear] = React.useState([]);

  /** List of Valid Years */
  React.useEffect(() => {
    let yearFrom = 1950;
    let yr = [];
    for (let i = yearFrom; i < 2022 + 2; i++) {
      yr.push(i);
    }
    return setYear(yr);
  }, []);

  const [lga, setLGA] = React.useState([]);

  /** List of L.G.As */
  React.useEffect(() => {
    let lgas = [];
    listOfLGAs.map((lga) => {
      return lgas.push(lga);
    });
    console.log(lgas)
    return setLGA(lgas);
  }, []);

  return (
    <main className="">
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-0 xl:py-0">
        <div className="flex justify-center w-full mb-24 -mt-10 ">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Become An Agent
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This section is for individuals who want to register as agents;
              they will be able to create individual taxpayer profiles.
            </p>
          </div>
        </div>
        <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
          {/* Name of Service Begins */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <Group space>
              <div className="lg:px-24 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name of Service
                </label>
                <Select.Nice
                  md
                  secondary
                  full
                  className="min-w-full max-w-350 w-350"
                >
                  <option selected value={1}>
                    I'm extra large cavron
                  </option>
                  <option value={2}>Dos</option>
                  <option value={3}>Tres</option>
                </Select.Nice>
                <Amount />
              </div>
            </Group>
          </div>

          {/* Name of Service ends */}
          <h2 className="text-xl font-bold lg:px-24 my-10">
            Student Information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 justify-center items-center lg:w-auto lg:px-24">
            <Input
              lg
              full
              placeholder="eg. John"
              type="text"
              name="surName"
              label="Surname"
              before={<Icon name="text" />}
              onChange={(e) => setAgent({ ...agent, surName: e.target.value })}
            />
            <Input
              lg
              full
              placeholder="eg. Ebuka"
              type="text"
              name="firstName"
              label="First Name"
              before={<Icon name="text" />}
              onChange={(e) =>
                setAgent({ ...agent, firstName: e.target.value })
              }
            />
            <Input
              lg
              full
              placeholder="eg. Yemi"
              type="text"
              name="otherNames"
              label="Other Names"
              before={<Icon name="text" />}
              onChange={(e) =>
                setAgent({ ...agent, otherNames: e.target.value })
              }
            />
            <Input
              lg
              full
              placeholder="e.g Umuowa High School, Orlu Nigeria"
              type="text"
              name="school"
              label="Name of School"
              before={<Icon name="text" />}
              onChange={(e) => setAgent({ ...agent, school: e.target.value })}
            />
            <Input
              lg
              full
              value={agent.dob}
              type="date"
              name="address"
              label="Date of Birth"
              before={<Icon name="calendar-day" />}
              onChange={(e) => setAgent({ ...agent, address: e.target.value })}
            />
            <Select.Nice
              lg
              secondary
              full
              label="L.G.A"
              className="min-w-full max-w-350 w-350"
            >
              <option selected value={1}>
                Select L.G.A.
              </option>
              {lga.map((lg) => (
                <option key={lg} value={lg}>
                  {lg}
                </option>
              ))}
            </Select.Nice>
            <Select.Nice
              lg
              secondary
              full
              label="Gender"
              className="min-w-full max-w-350 w-350"
            >
              <option selected value={1}>
                Select Gender
              </option>
              <option value={2}>Male</option>
              <option value={3}>Female</option>
            </Select.Nice>
            <Select.Nice
              lg
              secondary
              full
              label="Year"
              className="min-w-full max-w-350 w-350"
            >
              {year.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </Select.Nice>
          </div>
          <div className="text-xl font-bold lg:px-24 my-10 mb-20 flex flex-col gap-5">
            <h2 className="text-xl font-bold my-10">Payer Information</h2>
            <Input
              lg
              full
              placeholder="eg. Emeka John Yemi"
              type="text"
              name="fullName"
              label="Full Name"
              before={<Icon name="text" />}
              onChange={(e) => setAgent({ ...agent, fullName: e.target.value })}
            />
            <Input
              lg
              full
              placeholder="eg. 0123456789"
              type="text"
              name="imoNumber"
              label="IMSSBN Number"
              before={<Icon name="text" />}
              onChange={(e) =>
                setAgent({ ...agent, firstName: e.target.value })
              }
            />
            <Input
              lg
              full
              placeholder="eg. 080123456789"
              type="text"
              name="phone"
              label="Phone Number"
              before={<Icon name="phone" />}
              onChange={(e) =>
                setAgent({ ...agent, firstName: e.target.value })
              }
            />
            <Input
              lg
              full
              placeholder="eg. mail@mail.com"
              type="email"
              name="email"
              label="Email"
              before={<Icon name="mail" />}
              onChange={(e) =>
                setAgent({ ...agent, firstName: e.target.value })
              }
            />
            <Button.Group space>
              <button
                type="submit"
                className="py-4 px-20 mt-20 rounded-md bg-green-500 hover:bg-green-600 text-white font-normal shadow-sm"
              >
                Next <Icon className="font-bold" name="chevron-double-right" />
              </button>
            </Button.Group>
          </div>
          {submitted && (
            <TailModal
              title={title}
              message={message}
              setSubmitted={setSubmitted}
              status={status}
              setStatus={setStatus}
              setTitle={setTitle}
              setMessage={setMessage}
            />
          )}
        </form>
        <div className="mt-24">{/* <Footer /> */}</div>
      </section>
    </main>
  );
};

export default Single;
