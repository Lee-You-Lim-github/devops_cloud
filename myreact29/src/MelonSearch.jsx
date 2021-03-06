import { Input } from 'antd';
import { useState } from 'react'; // 리액트에 있는 걸 import한다.

import Axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

// antd list 추가
import { List, Avatar, notification } from 'antd';

function MelonSearch() {
  const [query, setQuery] = useState('');
  const [songList, setSongList] = useState([]);

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    console.group('handleChange');
    console.log(value);
    console.groupEnd();
    setQuery(value);
  };
  const handlePressEnter = (e) => {
    console.group('handlePressEnter');
    console.log(`검색어 ${query}로 검색합니다.`);
    console.groupEnd();

    const url = 'https://www.melon.com/search/keyword/index.json';

    Axios({
      url: url,
      adapter: jsonpAdapter,
      callbackParamName: 'jscallback',
      params: {
        query: query,
      },
    })
      .then((response) => {
        // ALBUMCONTENTS, ARTISTCONTENTS
        const {
          data: { SONGCONTENTS: searchedSongList = [] }, // 대상이 undefined일 때 빈 array를 주겠다.
        } = response;
        console.group('멜론 검색 결과');
        console.log(searchedSongList);
        console.groupEnd();

        setSongList(searchedSongList);

        notification.info({
          message: '멜론 검색',
          description: `${searchedSongList.length}개의 노래 검색 결과가 있습니다.`,
        });
      })
      .catch((error) => {
        console.group('멜론 검색 에러');
        console.log(error);
        console.groupEnd();

        notification.error({
          message: '멜론 검색 에러',
          // 주의: 유처 친화적인 에러 메세지는 아닙니다.
          description: JSON.stringify(error),
        });
      });
  };

  return (
    <div style={{ width: 300, margin: '0 auto' }}>
      <h2>멜론 검색</h2>
      검색어 : {query}
      <hr />
      <Input
        placeholder="검색어를 입력해주세요"
        onChange={handleChange}
        onPressEnter={handlePressEnter}
      />
      {songList.map((song) => {
        return (
          <List
            itemLayout="horizontal"
            dataSource={songList}
            renderItem={(song) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={song.ALBUMIMG} />}
                  title={
                    <a
                      href={`https://www.melon.com/song/detail.htm?songId=${song.SONGID}`}
                      target={'_blank'}
                    >
                      {song.SONGNAME}
                    </a>
                  }
                  description={song.ARTISTNAME}
                />
              </List.Item>
            )}
          />
        );
      })}
    </div>
  );
}

export default MelonSearch;
