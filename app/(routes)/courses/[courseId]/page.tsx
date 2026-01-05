'use client'
import { useParams } from 'next/navigation';
import { CourseDetailBanner } from './_components/CourseDetailBanner';
import axios from 'axios';
import { useEffect } from 'react';

function CourseDetail() {

    const {courseId} = useParams(); 
    
    useEffect(() => {
        GetCourseDetail();
    }, [courseId]);

    const GetCourseDetail = async () => {
        const result = await axios.get('api/course?courseId='+courseId);
        console.log(result.data);
    }

    return (
        <div>
            <CourseDetailBanner/>
        </div>
    )
}

export default CourseDetail;