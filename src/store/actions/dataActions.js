import { FETCH_DATA } from './types';
import Prismic from 'prismic-javascript';

export const fetchData = () => {
  const endpoint = 'https://fortnitetimeline.cdn.prismic.io/api/v2';

  return async dispatch => {
    const Client = Prismic.client(endpoint);
    let data = {};

    const generalQuery = Prismic.Predicates.at('document.type', 'general');
    const generalResponse = await Client.query(generalQuery);

    if (generalResponse) {
      const {
        start_of_season,
        end_of_season,
        stw_season_type,
      } = generalResponse.results[0].data;

      data = {
        startOfSeason: new Date(start_of_season),
        endOfSeason: new Date(end_of_season),
        stwSeasonType: stw_season_type,
      };
    }

    const battlePassQuery = Prismic.Predicates.at(
      'document.type',
      'battle_pass'
    );
    const battlePassResponse = await Client.query(battlePassQuery);

    if (battlePassResponse) {
      const { items } = battlePassResponse.results[0].data;
      const battlePass = {};

      for (const item of items) {
        const { level } = item;
        const newItem = {
          name: item.name[0].text,
          rarity: item.rarity,
          type: item.type,
        };

        if (!battlePass[level]) battlePass[level] = { items: [] };

        battlePass[level].items.push(newItem);
      }

      data.battlePass = battlePass;
    }

    return dispatch({ type: FETCH_DATA, payload: data });
  };
};
