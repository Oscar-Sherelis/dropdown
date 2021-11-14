import Dropdown from "./Dropdown.module.css";
import DropdownList from "./DropdownList.module.css";

import PropTypes from "prop-types";

function FaqItem({ mainText, list }) {
  return (
    <label>
      <ul className="dropdown">
        <input type="radio" name="faq-radio" />

        <li className={Dropdown.faq_item}>
          <div className={Dropdown.faq_elements}>
            <div className={Dropdown.dropdown_text}>{mainText}</div>
          </div>
        </li>
        <ul className={DropdownList.list}>
          {list.map((listEl) => (
            <label>
              <input type="checkbox" name="checkbox[]" />
              <li key={listEl.id}>
                {listEl.split(/(\s+)/).map((word) =>
                  word.includes("@") ? (
                    <span>
                      &nbsp;
                      <a href={"mailto:" + word}>{word}</a>
                      &nbsp;
                    </span>
                  ) : (
                    word
                  )
                )}
              </li>
            </label>
          ))}
        </ul>
      </ul>
    </label>
  );
}

// eslint-disable-next-line react/no-typos
FaqItem.propTypes = {
  mainText: PropTypes.string,
  list: PropTypes.array
};

export default FaqItem;
