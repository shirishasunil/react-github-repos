import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterDetails, isActive, setActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails
  const activeBtn = isActive
    ? 'language-button active-language-btn'
    : 'language-button '
  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }
  return (
    <li>
      <button
        className={activeBtn}
        type="button"
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
