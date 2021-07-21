fetch(
  "https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.data[5]);
  });
