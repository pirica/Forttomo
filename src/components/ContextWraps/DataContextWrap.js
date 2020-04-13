import React, { useState, useEffect } from 'react';

import Prismic from 'prismic-javascript';
import DataContext from './../../context/DataContext';

const DataContextWrap = ({ children }) => {
  const [generalData, setGeneralData] = useState({});
  const [battlePass, setBattlePass] = useState({});
  const [loadingGeneral, setLoadingGeneral] = useState(true);
  const [loadingPass, setLoadingPass] = useState(true);

  useEffect(() => {
    const endpoint = 'https://fortnitetimeline.cdn.prismic.io/api/v2';
    const Client = Prismic.client(endpoint);

    const fetchGeneralData = async () => {
      const query = Prismic.Predicates.at('document.type', 'general');
      const response = await Client.query(query);

      if (response) {
        const { data } = response.results[0];

        const newData = {
          startOfSeason: new Date(data.start_of_season),
          endOfSeason: new Date(data.end_of_season),
          stwSeasonType: data.stw_season_type,
        };

        setGeneralData(newData);
        setLoadingGeneral(false);
      }
    };

    const fetchBattlePass = async () => {
      const query = Prismic.Predicates.at('document.type', 'battle_pass');
      const response = await Client.query(query);

      if (response) {
        const { items } = response.results[0].data;
        const newBattlePass = {};

        for (const item of items) {
          const { level } = item;
          const newItem = {
            name: item.name[0].text,
            rarity: item.rarity,
            type: item.type,
          };

          if (!newBattlePass[level]) newBattlePass[level] = { items: [] };

          newBattlePass[level].items.push(newItem);
        }

        setBattlePass(newBattlePass);
        setLoadingPass(false);
      }
    };

    fetchGeneralData();
    fetchBattlePass();
  }, []);

  return (
    <DataContext.Provider
      value={{ generalData, battlePass, loadingGeneral, loadingPass }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextWrap;
