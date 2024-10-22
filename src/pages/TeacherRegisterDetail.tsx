import { useSearchParams } from 'react-router-dom';



const TeacherRegisterDetail = () => {

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');


  return (
    <>
      {id}
    </>
  )
}

export default TeacherRegisterDetail;