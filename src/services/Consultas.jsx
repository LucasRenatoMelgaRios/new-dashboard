import axios from "axios";

export async function NAVEGATION(url, setData, setLinks) {
    await axios
      .get(`${url}`)
      .then((response) => {
        setData(response.data.data);
        if (setLinks !== null) {
          setLinks({
            current_page: response.data.current_page,
            last_page: response.data.last_page,
            next_page_url: response.data.next_page_url,
            prev_page_url: response.data.prev_page_url,
            first_page_url: response.data.first_page_url,
            last_page_url: response.data.last_page_url,
          });
        }
      })
      .catch((err) => console.error(err));
 }