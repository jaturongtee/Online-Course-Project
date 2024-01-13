
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CourseDetail.css";
import CourseImage from "./CourseImage";
import LessonData from "./LessonData";


interface CourseDetailProps {
  id: number;
  name: string;
  description: string;
  category: string;
  
}

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [courseDetail, setCourseDetail] = useState<CourseDetailProps| null>(null);

  useEffect(() => {
    axios
      .get(
        `https://borntodev-final-project-api.borntodev.repl.co/courses/${id}`
      )
      .then((response) => {
        setCourseDetail(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="coursemainbox">
        <div className="coursetitle">
          <h3>{courseDetail?.name}</h3>
        </div>
        <div className="courseimage">
          <img src={CourseImage(Number(id))} alt={courseDetail?.name} />
        </div>
        <div className="courseCategory">
          <p>{courseDetail?.category}</p>
        </div>
        <div className="coursedescription">
          <p>{courseDetail?.description}</p>
        </div>
      </div>
      <div className="lessonbox">
        <div className="lessonintro">
          <p>เนื้อหาในคอร์ส</p>
        </div>
        <LessonData courseId={Number(id)} />
      </div>
    </div>
  );
};

export default CourseDetail;
