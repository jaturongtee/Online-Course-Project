import './Recommend.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CourseImage from './CourseImage';

interface Course{
    category: string;
    description: string;
    id: number;
    name: string;
}

 const Recommend = () => {

    const [courses, setCourses] = useState<Course[]>([
      {
        "id": 1,
        "name": "Intro to Python",
        "description":
        "Learn the basics of Python, a popular programming language for both beginners and experts.",
        "category": "Programming Fundamentals"
      },
      {
        "id": 2,
        "name": "Advanced JavaScript",
        "description":
        "Take your JavaScript skills to the next level with this advanced course.",
        "category": "Web Development"
      },
      {
        "id": 3,
        "name": "Machine Learning with TensorFlow",
        "description":
        "Learn how to build machine learning models using the popular TensorFlow library.",
        "category": "Machine Learning"
      },
      {
        "id": 4,
        "name": "Data Science with R",
        "description":
        "Explore the world of data science using the R programming language.",
        "category": "Data Science"
      },
    ]);

    useEffect(() => {
        axios.get('https://borntodev-final-project-api.borntodev.repl.co/courses')
        .then(response => {
          setCourses(response.data);
        })
        .catch(error => {
          console.error('There was an error!',error);
        });
      }, [])

  return (
    <div>
         <div className="title">
                <h1>คอร์สเรียนแนะนำ</h1>
            </div>
      <div className="recommendbox">
        {courses.map((course: Course) => (
          <div key={course.id}>
            <div className="card">
              <div className="cardimg">
              <img src={CourseImage(course.id)} alt={course.name} />
              </div>
              <div className="cardCategory">
                <h2>{course.category}</h2>
              </div>
              <div className="cardtitle">
                <h3>{course.name}</h3>
              </div>
              <div className="cardinfo">
                <p>{course.description}</p>
              </div>
              <div className="openbtn">
              <Link to={`/courses/${course.id}`}>
                  <button>เริ่มเรียน</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommend