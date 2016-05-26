var page = new tabris.Page({
  topLevel: true,
  title: "MudBook2"
});
new tabris.TextView({
  layoutData: {centerX: 0, centerY: 0},
  text: "Send Mud Photos to friends in facebook"
}).appendTo(page);
page.open();