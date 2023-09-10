import BarProgressStat from "./BarProgressStat"

const StatBarList = ( {stats} ) => {
  return (
    <section className="mt-4">
        <h2 className="font-roboto text-center text-[25px] p-1">Stats</h2>
        <section>
            {
                stats?.map((stat) => <BarProgressStat key={stat.name} stat={ stat } />)
            }
        </section>
    </section>
)
}
export default StatBarList