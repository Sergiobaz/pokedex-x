
const BarProgressStat = ( {stat} ) => {

    const getPercentBarProgress = (statValue) => {
        const MAX_STAT_VALUE = 255
        const percent = (statValue * 100) / MAX_STAT_VALUE
        return `${percent}%`
    }

    const firstLetterToUpperCase = (str) => {
        const firstLetter = str[0]
        const firstLetterUpper = firstLetter.toUpperCase()
        const strWithOutFirstLetter = str.slice(1)
        return firstLetterUpper + strWithOutFirstLetter
      }

  return (
    <article >
        <section className="flex justify-between px-4">
            <h5 className="font-roboto" >{firstLetterToUpperCase(stat.name)}</h5>
            <span className="font-roboto">{stat.value}/255</span>
        </section>
        <div className="h-6 bg-slate-300 rounded-md">
            <div style={{width: getPercentBarProgress(stat.value)}} className="h-full w-[] bg-gradient-to-r from-yellow-500 to-orange-500"></div>
        </div>
    </article>
  )
}
export default BarProgressStat