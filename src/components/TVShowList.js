import React from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow";

function TVShowList(props) {
  //console.log(props.shows);
  function mapAllShows() {

    
      if (!props.searchTerm) {
            return props.shows
              .filter((s) => {
                if (s.name.toLowerCase().includes(props.searchTerm)) {
                  return true;
                }
                return false;
              })
              .map((s) => {
                return <TVShow show={s} key={s.id} selectShow={props.selectShow} />;
              });
          }

   /* if (!props.searchTerm) {
      return props.shows.filter((s) => {
        if (s.name.toLowerCase().includes(props.searchTerm)) {
          return <TVShow show={s} key={s.id} selectShow={props.selectShow} />;
        }
      });
    }*/

    return props.shows.map((s) => (
      <TVShow show={s} key={s.id} selectShow={props.selectShow} />
    ));
  }

  return (
    <div className="TVShowList">
      <Grid>{mapAllShows()}</Grid>
    </div>
  );
}

export default TVShowList;
