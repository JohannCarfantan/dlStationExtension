import axios from "axios";
import config from "./config.json";

let dlLink = function(link){
  axios({
    method: 'post',
    url: config.url,
    data: {
      url: link.linkUrl
    }
  })
    .then((res) => {
      alert(res.data.msg);
    })
    .catch((err) => {
      alert(err);
    });
};

chrome.contextMenus.create({
  title: "Telecharger sur le NAS",
  contexts:["link"],
  onclick: dlLink
});
