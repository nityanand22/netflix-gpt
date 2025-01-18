import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const client = new OpenAI({
  apiKey: process.env[OPENAI_KEY],
  dangerouslyAllowBrowser: true,
});

export default client;
