"use client"
import { MdSearch } from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import { useDebouncedCallback } from "use-debounce";

const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();

 const handleChange = useDebouncedCallback( (e) => {
  const params = new URLSearchParams(searchParams);

  params.set('page', 1);
  if(e.target.value) {
    e.target.value.length > 2 &&  params.set('q', e.target.value);
  }else {
    params.delete("q");
  }

  replace(`${pathname}?${params}`)
 },300);

  return (
    <div className={styles.search_container}>
     <MdSearch />
     <input type="text" placeholder={placeholder}  className={styles.search_input} onChange={handleChange} />
    </div>
  );
};

export default Search;