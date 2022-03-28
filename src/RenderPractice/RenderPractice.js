/** @format */
import React, { Component } from "react";

class RenderPractice extends Component {
  data = [
    {
      maPhim: 1283,
      tenPhim: "Trainwreck",
      biDanh: "trainwreck",
      trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
      moTa: "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1284,
      tenPhim: "Inside Out",
      biDanh: "inside-out",
      trailer: "https://www.youtube.com/embed/seMwpP0yeu4",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/insideout.jpg",
      moTa: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1285,
      tenPhim: "Home",
      biDanh: "home",
      trailer: "https://www.youtube.com/embed/MyqZf8LiWvM",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/home.jpg",
      moTa: "Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1286,
      tenPhim: "Batman v Superman: Dawn of Justice",
      biDanh: "batman-v-superman-dawn-of-justice",
      trailer: "https://www.youtube.com/embed/0WWzgGyAH6Y",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
      moTa: "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1287,
      tenPhim: "Ant-Man",
      biDanh: "ant-man",
      trailer: "https://www.youtube.com/embed/1HpZevFifuo",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/antman.jpg",
      moTa: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1288,
      tenPhim: "Jurassic World",
      biDanh: "jurassic-world",
      trailer: "https://www.youtube.com/embed/RFinNxS5KN4",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/jurassicworld.jpg",
      moTa: "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1289,
      tenPhim: "Fantastic Four",
      biDanh: "fantastic-four",
      trailer: "https://www.youtube.com/embed/AAgnQdiZFsQ",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/fantasticfour.jpg",
      moTa: "Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1290,
      tenPhim: "Mad Max: Fury Road",
      biDanh: "mad-max-fury-road",
      trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/madmax.jpg",
      moTa: "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1291,
      tenPhim: "True Detective",
      biDanh: "true-detective",
      trailer: "https://www.youtube.com/embed/TXwCoNwBSkQ",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/truedetective.jpg",
      moTa: "An anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1292,
      tenPhim: "The Longest Ride",
      biDanh: "the-longest-ride",
      trailer: "https://www.youtube.com/embed/FUS_Q7FsfqU",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/thelongestride.jpg",
      moTa: "After an automobile crash, the lives of a young couple intertwine with a much older man, as he reflects back on a past love.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1293,
      tenPhim: "The Walking Dead",
      biDanh: "the-walking-dead",
      trailer: "https://www.youtube.com/embed/R1v0uFms68U",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/thewalkingdead.jpg",
      moTa: "Sheriff's Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1294,
      tenPhim: "Southpaw",
      biDanh: "southpaw",
      trailer: "https://www.youtube.com/embed/Mh2ebPxhoLs",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/southpaw.jpg",
      moTa: "Boxer Billy Hope turns to trainer Tick Willis to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1295,
      tenPhim: "Specter",
      biDanh: "specter",
      trailer: "https://www.youtube.com/embed/LTDaET-JweU",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/spectre.jpg",
      moTa: "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1296,
      tenPhim: "Avengers: Infinity War ",
      biDanh: "avengers-infinity-war",
      trailer: "https://www.youtube.com/embed/DKqu9qc-5f4",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg",
      moTa: "Biệt đội siêu anh hùng Avengers và những đồng minh sẽ phải sẵn sàng hi sinh tính mạng để chống lại siêu ác nhân hùng mạnh Thanos trước khi hắn phá huỷ mọi thứ và đặt dấu chấm hết cho vũ trụ. ",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
  ];

  renderBody = () => {
    let body = this.data.map((item, index) => {
      return (
        <div
          key={index}
          className="card m-2 flex-grow-1"
          style={{ width: "18rem" }}
        >
          <img src={item.hinhAnh} className="card-img-top" alt={item.maPhim} />
          <div className="card-body">
            <h5 className="card-title">{item.tenPhim}</h5>
            <p className="card-text">{item.moTa}</p>
            <a href={item.trailer} className="btn btn-primary">
              Watch trailer
            </a>
          </div>
        </div>
      );
    });
    return body;
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-between align-content-center">
          {this.renderBody()}
        </div>
      </div>
    );
  }
}

export default RenderPractice;
