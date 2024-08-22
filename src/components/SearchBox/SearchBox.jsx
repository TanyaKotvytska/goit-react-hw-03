import css from "./SearchBox.module.css"

export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css.searchboxcontainer}>
            <p className={css.searchboxtext}>Find contacts by name</p>
            <input className={css.searchinput} type="text" value={value} onChange={(event) => onFilter(event.target.value)} />
        </div>
    );
}