'use client'
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import styles from './styles.module.scss'

const Pagination =(count)=>{
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();
    const page = searchParams.get('page') || 1;
    const params = new URLSearchParams(searchParams);
    const itemPerPage = 2;
    const hasPrev = itemPerPage * (parseInt(page) - 1) > 0;
    const hasNext = itemPerPage * (parseInt(page) - 1) + itemPerPage < count;
    
    const handleChangePage = (type) => {
        type === 'prev' ? params.set("page", parseInt(page) - 1)
        : params.set("page", parseInt(page) + 1);
        replace(`${pathname}?${params}`)
    }
    return (
        <div className={styles.page_container}>
            <button className={styles.page_button} disabled={!hasPrev} onClick={() => handleChangePage("prev")} >Preview</button>
            <button className={styles.page_button} disabled={hasNext} onClick={() => handleChangePage("next")} >Next</button>
        </div>
    )
}

export default Pagination