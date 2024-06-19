import { formatDistance, parseISO } from "date-fns";

export const getDateConverted = function (strDate) {
  console.log("strDate " + strDate);
  var strSplitDate = String(strDate).split(" ");
  console.log("strSplitDate " + strSplitDate);
  var date = new Date(strSplitDate[0]);

  var dd = date.getDate();
  var mm = date.getMonth() + 1;

  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  date = dd + "-" + mm + "-" + yyyy;
  return date.toString();
};

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");
