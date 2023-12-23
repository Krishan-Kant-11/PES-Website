import "../styles/pagesStyles/OutreachPage.css"
import Events from "../components/Events"

function OutreachPage() {
  return (
    <>
      <h1>this is outreach page</h1>
      <Events>
        <Events.Tile
          title={"Event 1"}
          date={"14 December, 2023"}
          image={"https://placehold.co/500x250/FF6600/993300?text=PES+Event"}
        />
        <Events.Tile
          title={"Event 2"}
          date={"14 December, 2023"}
          image={"https://placehold.co/500x250/FF6600/993300?text=PES+Event"}
        />
        <Events.Tile
          title={"Event 3"}
          date={"14 December, 2023"}
          image={"https://placehold.co/500x250/FF6600/993300?text=PES+Event"}
        />
        <Events.Tile
          title={"Event 4"}
          date={"14 December, 2023"}
          image={"https://placehold.co/500x250/FF6600/993300?text=PES+Event"}
        />
        <Events.Tile
          title={"Event 5"}
          date={"14 December, 2023"}
          image={"https://placehold.co/500x250/FF6600/993300?text=PES+Event"}
        />
        <Events.Tile
          title={"Event 6"}
          date={"14 December, 2023"}
          image={"https://placehold.co/500x250/FF6600/993300?text=PES+Event"}
        />
        <Events.Tile
          title={"Event 7"}
          date={"14 December, 2023"}
          image={"https://placehold.co/500x250/FF6600/993300?text=PES+Event"}
        />
        <Events.Tile
          title={"Event 8"}
          date={"14 December, 2023"}
          image={"https://placehold.co/500x250/FF6600/993300?text=PES+Event"}
        />
        <Events.Tile
          title={"Event 9"}
          date={"14 December, 2023"}
          image={"https://placehold.co/500x250/FF6600/993300?text=PES+Event"}
        />
      </Events>
    </>
  )
}

export default OutreachPage