import axios from "axios";

const getAllTicketsHook = async () => {
  try {
    const { data } = await axios.get("/tickets");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getAllTicketsHook;
