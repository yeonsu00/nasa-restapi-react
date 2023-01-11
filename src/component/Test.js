import axios from "axios";
import { useState, useEffect, useRef, useCallback } from "react";

const Test = (props) => {

    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [load, setLoad] = useState(1);
    const preventRef = useRef(true);
    const obsRef = useRef(null);

    useEffect(() => {
        getTest();
        const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
        if (obsRef.current) observer.observe(obsRef.current);
        return () => { observer.disconnect(); }
    }, [])

    useEffect(() => {
        getTest();
    }, [page])

    const obsHandler = ((entries) => {
        const target = entries[0];
        if (target.isIntersecting && preventRef.current) {
            preventRef.current = false;
            setPage(prev => prev + 1);
        }
    })

    const getTest = useCallback(async () => { //글 불러오기  
        console.log('데이터 불러오기');
        console.log(props.dataArray);
        console.log('props.data');
        setLoad(true); //로딩 시작
        const res = await axios({ method: 'GET', url: `https://api.thecatapi.com/v1/images/search` });
        console.log(res);

        if(res.data){
            setList(prev=> [...prev, {...res.data[0]} ]); //리스트 추가
            preventRef.current = true;
        }else {
            console.log(res); //에러
        }
        setLoad(false); //로딩 종료
    }, [page]);

    return (
        <>
            <div className="wrap min-h-[100vh]">
                {
                    list &&
                    <>
                        {
                            list.map((li) =>
                                <img key={li.id} className="opacity-100 mx-auto mb-6" src={li.url} alt={li.dke} width={'500px'} height={'300px'} />
                            )}
                    </>

                }
                {
                    load ?
                        <div className="py-3 bg-blue-500 text-center">로딩 중</div>
                        :
                        <></>
                }
                <div ref={obsRef} className="py-3 bg-red-500 text-white text-center">옵저버 Element</div>
            </div>
        </>
    )
}

export default Test;