'use client'
import { useParams } from 'next/navigation';
import { CourseDetailBanner } from './_components/CourseDetailBanner';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Course } from '../_components/CourseList';

function CourseDetail() {

    const {courseId} = useParams(); 
    const [courseDetail,setCourseDetail] = useState<Course>();
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        GetCourseDetail();
    }, [courseId]);

    const GetCourseDetail = async () => {
        setLoading(true);
        const result = await axios.get(`/api/course?courseId=${courseId}`)
        setCourseDetail(result?.data);
        setLoading(false);
    }

    return (
        <div>
            <CourseDetailBanner loading={loading} courseDetail={courseDetail}/>
        </div>
    )
}

export default CourseDetail;