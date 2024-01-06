import { useState, useEffect } from "react";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import ReactPlayer from "react-player";
import Checkbox from "./checkbox";
import "./LessonData.css";

interface Lesson {
  Lesson1: string;
  Lesson2: string;
  Lesson3: string;
  Lesson4: string;
  Lessonvideo1: string;
  Lessonvideo2: string;
  Lessonvideo3: string;
  Lessonvideo4: string;
  id: number;
}

interface LessonDataProps {
  courseId: number;
}

const LessonData = ({ courseId }: LessonDataProps) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [showVideos, setShowVideos] = useState({
    video1: false,
    video2: false,
    video3: false,
    video4: false,
  });

  useEffect(() => {
    const newData: Lesson[] = [
      {
        Lesson1: "Lesson 1: Introduction to Python",
        Lesson2: "Lesson 2: Python Basics - Beyond the Basics",
        Lesson3: "Object-Oriented Programming in Python",
        Lesson4: "Lesson 4: Working with Libraries and APIs in Python",
        Lessonvideo1: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
        Lessonvideo2:
          "https://www.youtube.com/watch?v=kSrnLbioN6w&list=PL0-84-yl1fUmeV_2bBSguF_S0TVZk8wow",
        Lessonvideo3: "https://www.youtube.com/watch?v=Ej_02ICOIgs",
        Lessonvideo4: "https://www.youtube.com/watch?v=Xi1F2ZMAZ7Q",
        id: 1,
      },
      {
        Lesson1: "Lesson 1: Advanced JavaScript Fundamentals",
        Lesson2: "Lesson 2: Advanced JavaScript Techniques",
        Lesson3: "Lesson 3: Frontend Development with Advanced JavaScript",
        Lesson4: "Lesson 4: Backend Development with Node.js",
        Lessonvideo1: "https://www.youtube.com/watch?v=lkIFF4maKMU",
        Lessonvideo2: "https://www.youtube.com/watch?v=kyfRiXOocRQ",
        Lessonvideo3: "https://www.youtube.com/watch?v=zJSY8tbf_ys",
        Lessonvideo4:
          "https://www.youtube.com/watch?v=SUghFlFh2cw&list=PL7zl8TDRnbuk2MalECSOQ9qtg6N4ewbGs",
        id: 2,
      },
      {
        Lesson1:
          "Lesson 1: Introduction to Machine Learning and TensorFlow Basics",
        Lesson2: "Lesson 2: Neural Networks and Deep Learning with TensorFlow",
        Lesson3:
          "Lesson 3: TensorFlow for Natural Language Processing (NLP) and Computer Vision",
        Lesson4: "Lesson 4: Advanced TensorFlow Topics and Model Deployment",
        Lessonvideo1: "https://www.youtube.com/watch?v=KNAWp2S3w94",
        Lessonvideo2: "https://www.youtube.com/watch?v=Mubj_fqiAv8&list=PLeo1K3hjS3uu7CxAacxVndI4bE_o3BDtO",
        Lessonvideo3: "https://www.youtube.com/watch?v=CMrHM8a3hqw",
        Lessonvideo4: "https://www.youtube.com/watch?v=R2vIYVdMzPc",
        id: 3,
      },
      {
        Lesson1: "Lesson 1: Introduction to R and Basics of Data Analysis",
        Lesson2:
          "Lesson 2: Exploratory Data Analysis (EDA) and Data Preprocessing in R",
        Lesson3: "Lesson 3: Introduction to Machine Learning with R",
        Lesson4: "Lesson 4: Advanced Topics in Data Science with R",
        Lessonvideo1: "https://www.youtube.com/watch?v=I4NRCN9DPTI",
        Lessonvideo2: "https://www.youtube.com/watch?v=JW5Ug6NQexg",
        Lessonvideo3: "https://www.youtube.com/watch?v=v4UxHiquh8Q&list=PLTJTBoU5HOCTV1BJbI6CjSVU7pq7aW1r2",
        Lessonvideo4: "https://www.youtube.com/watch?v=Q5g6lYUn6Q4",
        id: 4,
      },
    ];

    const filteredLessons = newData.filter((lesson) => lesson.id === courseId);
    setLessons(filteredLessons);
  }, [courseId]);

  return (
    <div className="allLesson">
      {lessons.map((lesson: Lesson) => (
        <div key={lesson.id}>
          <div className="lesson">
            <div className="checkbox">
              <Checkbox id={`lesson1_${lesson.id}`} label={""} />
            </div>
            <p>{lesson.Lesson1}</p>
            <div
              className="expandicon"
              onClick={() =>
                setShowVideos((showVideos) => ({
                  ...showVideos,
                  video1: !showVideos.video1,
                }))
              }
            >
              <PlayCircleFilledWhiteOutlinedIcon sx={{ fontSize: 50 }} />
            </div>
          </div>
          {showVideos.video1 && (
            <div className="videobox">
              <ReactPlayer url={lesson.Lessonvideo1} />
            </div>
          )}

          <div className="lesson">
            <div className="checkbox">
              <Checkbox id={`lesson2_${lesson.id}`} label={""} />
            </div>

            <p>{lesson.Lesson2}</p>
            <div
              className="expandicon"
              onClick={() =>
                setShowVideos((showVideos) => ({
                  ...showVideos,
                  video2: !showVideos.video2,
                }))
              }
            >
              <PlayCircleFilledWhiteOutlinedIcon sx={{ fontSize: 50 }} />
            </div>
          </div>
          {showVideos.video2 && (
            <div className="videobox">
              <ReactPlayer url={lesson.Lessonvideo2} />
            </div>
          )}
          <div className="lesson">
            <div className="checkbox">
              <Checkbox id={`lesson3_${lesson.id}`} label={""} />
            </div>
            <p>{lesson.Lesson3}</p>
            <div
              className="expandicon"
              onClick={() =>
                setShowVideos((showVideos) => ({
                  ...showVideos,
                  video3: !showVideos.video3,
                }))
              }
            >
              <PlayCircleFilledWhiteOutlinedIcon sx={{ fontSize: 50 }} />
            </div>
          </div>
          {showVideos.video3 && (
            <div className="videobox">
              <ReactPlayer url={lesson.Lessonvideo3} />
            </div>
          )}
          <div className="lesson">
            <div className="checkbox">
              <Checkbox id={`lesson4_${lesson.id}`} label={""} />
            </div>

            <p>{lesson.Lesson4}</p>
            <div
              className="expandicon"
              onClick={() =>
                setShowVideos((showVideos) => ({
                  ...showVideos,
                  video4: !showVideos.video4,
                }))
              }
            >
              <PlayCircleFilledWhiteOutlinedIcon sx={{ fontSize: 50 }} />
            </div>
          </div>
          {showVideos.video4 && (
            <div className="videobox">
              <ReactPlayer url={lesson.Lessonvideo4} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LessonData;
