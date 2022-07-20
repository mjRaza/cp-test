
export const sendPostToApi = async(body)  => {
    // title: "foo",
    // body: "bar",
    // userId: 1,
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          body
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const response = await res.json();
      return true
     
    } catch (error) {
     return false
    }
  };