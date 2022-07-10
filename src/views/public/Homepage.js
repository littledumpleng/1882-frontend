import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../AppConstants';
import { FilteringMenu } from '../../components/Filter/FilteringMenu';

export const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [backgroundOptions, setBackgroundOptions] = useState([]);
  const [mediaTypeOptions, setMediaTypeOptions] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);
  const [themeOptions, setThemeOptions] = useState([]);

  const [backgroundsSelected, setBackgroundsSelected] = useState([]);
  const [mediaTypesSelected, setMediaTypesSelected] = useState([]);
  const [genresSelected, setGenresSelected] = useState([]);
  const [themesSelected, setThemesSelected] = useState([]);

  const [mediaResults, setMediaResults] = useState([]);

  // get mediaTypes
  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/mediatype`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        const selectOptions = res.data.map(mediaType => ({
          value: mediaType.id,
          label: mediaType.name
        }));
        setMediaTypeOptions(selectOptions);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  // get genres
  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/genre`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        const selectOptions = res.data.map(genre => ({
          value: genre.id,
          label: genre.name
        }));
        setGenreOptions(selectOptions);
      })
      .catch((error) => {
        console.error("error", error)
      });
  }, []);

  // get themes
  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/theme`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        const selectOptions = res.data.map(theme => ({
          value: theme.id,
          label: theme.name
        }));
        setThemeOptions(selectOptions);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  // get backgrounds
  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/background`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        const selectOptions = res.data.map(background => ({
          value: background.id,
          label: background.name
        }));
        setBackgroundOptions(selectOptions);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  const onSearchClick = () => {
    axios.get(
      `${BASE_API_URL}/media`,
      {
        params: {
          searchTerm: searchTerm !== '' ? searchTerm : undefined,
          mediaTypeIds: mediaTypesSelected.map(mediaType => mediaType.id),
          backgroundIds: backgroundsSelected.map(background => background.id),
          genreIds: genresSelected.map(genre => genre.id),
          themeIds: themesSelected.map(theme => theme.id),
        },
        ...DEFAULT_AXIOS_OPTIONS
      }
    )
      .then((res) => {
        console.log(res.data);
        // setMediaResults
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div>
      <div className="columns">
        <div className="column is-one-quarter">
          <FilteringMenu
            backgroundOptions={backgroundOptions}
            mediaTypeOptions={mediaTypeOptions}
            genreOptions={genreOptions}
            themeOptions={themeOptions}
            backgroundsSelected={backgroundsSelected}
            setBackgroundsSelected={setBackgroundsSelected}
            mediaTypesSelected={mediaTypesSelected}
            setMediaTypesSelected={setMediaTypesSelected}
            genresSelected={genresSelected}
            setGenresSelected={setGenresSelected}
            themesSelected={themesSelected}
            setThemesSelected={setThemesSelected}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearchClick={onSearchClick}
          />
        </div>
        <div className="column">
          <div className="box">
            <h1 className='has-text-left m-4'>Results:</h1>
            <div className="content">
              {mediaResults.map(media => (
                <div className="box">
                  <div className="content_element">
                    <div className="item-wrap">
                      <h3>Featured Review of the Month</h3>
                      <div className="item">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
