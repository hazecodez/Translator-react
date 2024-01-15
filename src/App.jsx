import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import axios from "axios";

const Api = axios.create({
  baseURL: "https://translate.googleapis.com/translate_a/single?client=gtx&sl=",
});

function App() {
  const [fromLang, setFrom] = useState("");
  const [toLang, setTo] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const Translate = async () => {
    try {
      Api.get(`${fromLang}&tl=${toLang}&dt=t&q=${encodeURI(text)}`)
        .then((res) => {
          setResult(res.data[0][0][0]);
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-evenly items-center h-screen">
      <Card className="w-5/12">
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            React Translator
          </Typography>
          <div className="flex w-full  justify-evenly">
            <Select
              onChange={(e) => setFrom(e)}
              size="md"
              label="Translate from.."
            >
              <Option value="en">English</Option>
              <Option value="hi">Hindi</Option>
              <Option value="ml">Malayalam</Option>
              <Option value="ta">Tamil</Option>
              <Option value="ur">Urdu</Option>
              <Option value="fr">French</Option>
              <Option value="de">German</Option>
              <Option value="ar">Arabic</Option>
              <Option value="ko">Korean</Option>
              <Option value="ja">Japanese</Option>
            </Select>
            <Select onChange={(e) => setTo(e)} size="md" label="Translate to..">
              <Option value="en">English</Option>
              <Option value="hi">Hindi</Option>
              <Option value="ml">Malayalam</Option>
              <Option value="ta">Tamil</Option>
              <Option value="ur">Urdu</Option>
              <Option value="fr">French</Option>
              <Option value="de">German</Option>
              <Option value="ar">Arabic</Option>
              <Option value="ko">Korean</Option>
              <Option value="ja">Japanese</Option>
            </Select>
          </div>
        </CardBody>

        <CardFooter className="pt-0">
          <div className="flex w-full shrink-0 gap-2 md:w-m80">
            <div className="w-full">
              <Input
                label="Enter text here..."
                onChange={(e) => setText(e.target.value)}
                className="w-64"
              />
            </div>
            <Button
              onClick={Translate}
              className="flex items-center gap-3"
              size="sm"
            >
              Translate
            </Button>
          </div>
          <br />
          <div className="w-full">
            <Typography>{result && result}</Typography>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
