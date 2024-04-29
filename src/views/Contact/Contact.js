import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import { Colors } from "./../../assets/styles/Colors";
import { Button } from "./../../assets/styles/Buttons";
import styled from "styled-components";
import Swal from "sweetalert2";
import Header from "./../../components/Header/Header";

export default function Paving() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [msg, setMsg] = useState("");
  const [accepted, setAccepted] = useState(false);

  const [errors, setErrors] = useState([]);

  const isError = (val) => {
    return errors.includes(val) ? true : false;
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setTopic("");
    setMsg("");
    setAccepted(false);
  };

  const sendMsg = () => {
    let err = [];

    if (name === "") {
      err.push("name");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      err.push("email");
    }

    if (phone.length < 9) {
      err.push("phone");
    }

    if (!accepted) {
      err.push("accepted");
    }

    setErrors(err);

    if (err.length === 0) {
      Swal.fire({
        icon: "success",
        text: "The message has been sent correctly.",
        showConfirmButton: false,
        timer: 3000,
      });

      clearForm();
    } else {
      Swal.fire({
        icon: "error",
        text: "Before submitting the form, complete the required fields.",
        showConfirmButton: false,
        timer: 5000,
      });
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>SportClub - contact</title>
      </Helmet>
      <Header title="Contact" color="blue" />
      <Wrapper>
        <Section01>
          <Item>
            <Heading color="orange">Basketball</Heading>
            <p>Bydgoszcz, Poland</p>
            <ItemLink href="tel:000000000">000 000 000</ItemLink>
            <ItemLink href="mailto:basketball@example.com">
              basketball@example.com
            </ItemLink>
          </Item>
          <Item>
            <Heading color="blue">Football</Heading>
            <p>Bydgoszcz, Poland</p>
            <ItemLink href="tel:000000000">000 000 000</ItemLink>
            <ItemLink href="mailto:football@example.com">
              football@example.com
            </ItemLink>
          </Item>
          <Item>
            <Heading color="orange">Social media</Heading>
            <ItemLink
              href="https://facebook.com/"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              Facebook
            </ItemLink>
            <ItemLink
              href="https://instagram.com/"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              Instagram
            </ItemLink>
            <ItemLink
              href="https://youtube.com/"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              Youtube
            </ItemLink>
          </Item>
        </Section01>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76612.23537509046!2d17.968143122086776!3d53.12576961030361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47031386764ebd6f%3A0xe49ee48c4b65f30e!2sBydgoszcz!5e0!3m2!1spl!2spl!4v1679610438289!5m2!1spl!2spl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa"
        ></Map>
        <Section02>
          <FormWrapper>
            <Heading color="orange">Send us a message</Heading>
            <FormItem>
              <Label error={isError("name")}>Full name</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.keyCode === 13 && sendMsg()}
                error={isError("name")}
              ></Input>
            </FormItem>
            <FormItem>
              <Label error={isError("email")}>E-mail</Label>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.keyCode === 13 && sendMsg()}
                error={isError("email")}
              ></Input>
            </FormItem>
            <FormItem>
              <Label error={isError("phone")}>Phone number</Label>
              <Input
                type="text"
                value={phone}
                onChange={(e) =>
                  setPhone((v) =>
                    e.target.validity.valid ? e.target.value : v
                  )
                }
                onKeyDown={(e) => e.keyCode === 13 && sendMsg()}
                pattern="[0-9]*"
                maxLength="15"
                error={isError("phone")}
              ></Input>
            </FormItem>
            <FormItem>
              <Label error={isError("topic")}>Topic</Label>
              <Input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.keyCode === 13 && sendMsg()}
                error={isError("topic")}
              ></Input>
            </FormItem>
            <FormItem>
              <Label error={isError("msg")}>Message</Label>
              <TextArea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                onKeyDown={(e) => e.keyCode === 13 && sendMsg()}
                error={isError("msg")}
              ></TextArea>
            </FormItem>
            <FormItem>
              <CheckboxWrapper error={isError("accepted")}>
                Integer in varius augue. Donec velit enim, euismod pulvinar
                ipsum nec, ultrices fermentum arcu. Nulla posuere mollis urna,
                quis malesuada leo faucibus quis. Aliquam et pulvinar odio, a
                mattis dui. Nulla nunc turpis, eleifend in fringilla vel,
                condimentum in risus. Nam arcu purus, suscipit at viverra ac,
                iaculis eu libero.
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                ></input>
                <span></span>
              </CheckboxWrapper>
            </FormItem>
            <Button text="Send" clicked={(clicked) => clicked && sendMsg()} />
          </FormWrapper>
        </Section02>
      </Wrapper>
    </HelmetProvider>
  );
}

const Wrapper = styled.div`
  width: 90vw;
  margin: 5vw auto;

  @media (min-width: 576px) {
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 720px;
    margin: 2.5vw auto;
  }

  @media (min-width: 992px) {
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }

  @media (min-width: 1400px) {
    width: 1320px;
  }

  @media (min-width: 1600px) {
    width: 1540px;
  }
`;

const Section01 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  gap: 1rem;
`;

const Item = styled.div`
  p {
    color: ${Colors.black};
  }
`;

const Heading = styled.h2`
  position: relative;
  width: 100%;
  display: flex;
  margin: 0 auto 1.5rem;
  text-transform: uppercase;
  text-align: left;
  font-size: 2rem;
  font-weight: 800;
  color: ${Colors.lightBlack};

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 5px;
    background-color: ${(props) =>
      props.color === "orange"
        ? Colors.darkOrange
        : props.color === "blue"
        ? Colors.darkBlue
        : Colors.darkOrange};
  }

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ItemLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${Colors.black};
`;

const Map = styled.iframe`
  width: 100%;
  height: 400px;
  margin-top: 4rem;
  border: none;
  border-radius: 4px;

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

const Section02 = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const FormItem = styled.div`
  width: 100%;
  margin: 0.5rem 0;

  &:nth-child(6),
  &:nth-child(7) {
    width: 100%;
  }

  &:nth-child(7) {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    width: 48%;
  }
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 0.5rem;
  display: block;
  color: ${(props) => (props.error ? "red" : Colors.black)};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  color: ${Colors.black};
  border-radius: 2px;
  outline: none;
  border: ${(props) =>
    props.error ? "1px solid red" : `1px solid ${Colors.black}`};
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 0.5rem;
  resize: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  color: ${Colors.black};
  border: 1px solid ${Colors.black};
  border-radius: 2px;
  outline: none;
`;

const CheckboxWrapper = styled.label`
  margin-bottom: 12px;
  padding-left: 35px;
  position: relative;
  display: block;
  color: ${(props) => (props.error ? "red" : Colors.black)};
  cursor: pointer;
  user-select: none;

  input {
    height: 0;
    width: 0;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  span {
    height: 20px;
    width: 20px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #eee;
  }

  &:hover input ~ span {
    background-color: ${Colors.gray};
  }

  input:checked ~ span {
    background-color: ${Colors.orange};
  }

  span::after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ span::after {
    display: block;
  }

  span::after {
    width: 5px;
    height: 10px;
    left: 8px;
    top: 4px;
    border: solid ${Colors.white};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
