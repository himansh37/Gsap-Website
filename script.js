let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-2",
    start: "0% 95%",
    end: "50% 50%",
    // markers: true,
    scrub: true,
  },
});

t1.to(
  ".pid1",
  {
    top: "130%",
    left: "3%",
  },
  "a"
);
t1.to(
  ".pid3",
  {
    top: "160%",
    left: "20%",
  },
  "a"
);
t1.to(
  ".pid2",
  {
    top: "172%",
    left: "75%",
  },
  "a"
);
t1.to(
  ".pid5",
  {
    top: "102%",
    left: "75%",
    rotate: "330",
  },
  "a"
);
t1.to(
  ".pid6",
  {
    top: "105%",
    left: "5%",
    rotate: "340",
  },
  "a"
);

let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-3",
    start: "0% 95%",
    end: "55% 50%",
    // markers: true,
    scrub: true,
  },
});
t2.to(
  ".pid1",
  {
    top: "227%",
    left: "31%",
    scale: 1.2,
  },
  "b"
);
t2.from(
  "#img1",
  {
    x: -300,
  },
  "b"
);
t2.from(
  "#img2",
  {
    x: -300,
    rotate: -90,
  },
  "b"
);
t2.from(
  "#img3",
  {
    x: 300,
    rotate: 90,
  },
  "b"
);
t2.from(
  "#img4",
  {
    x: 300,
    rotate: 90,
  },
  "b"
);
// t2.to(".pid1", {
//   top: "227%",
//   left: "31%",
//   scale: 1.2,
// });
