import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Anim.module.css';

const Anim = () => {

    const section1 = useRef(null);
    const [anim,setAnim] = useState(false);
    useEffect(() => {
        // current 속성을 통해 dom 속성을 참조할 수 있다. dom 내부 속성은 개발자 도구를 통해 확인
        console.log(section1.current.children[0].classList);
        // e.currentTarget.classList.add(styles.hidden);
        section1.current.children[2].classList.add(styles.hidden);                    
    }, []);
    useEffect(() => {
        console.log(anim)
        if(anim){
            section1.current.children[2].classList.add(styles.hidden)
        }
    },[anim])

    return (
        <>
            <main>
                <section ref={section1}>
                    <div className={styles.sa}
                        onClick={(e) => {
                            setAnim(!anim);
                            // e.currentTarget.className = styles.sa.show
                            e.currentTarget.classList.add(styles.show)
                        }}>애니메이션 1</div>

                    <div className={styles.sah}
                        onClick={(e) => {
                            // e.currentTarget.className = styles.sa.show
                            e.currentTarget.classList.add(styles.hidden)
                        }}>애니메이션 2</div>

                    <div className={styles.sah}
                        onClick={(e) => {
                        }}>부모에서 접근</div>
                </section>

            </main>

        </>
    );
}

export default Anim;