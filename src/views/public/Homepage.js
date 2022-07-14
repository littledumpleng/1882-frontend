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
          mediaTypeIds: mediaTypesSelected.map(mediaType => mediaType.value),
          backgroundIds: backgroundsSelected.map(background => background.value),
          genreIds: genresSelected.map(genre => genre.value),
          themeIds: themesSelected.map(theme => theme.value),
        },
        ...DEFAULT_AXIOS_OPTIONS
      }
    )
      .then((res) => {
        setMediaResults(res.data)
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
              <div className="box">
                {mediaResults.length > 0 ? mediaResults.map(media => {
                  const { title, description, releaseDate, mediaTypes = [], genres = [], themes = [], backgrounds = [], creatorRoles = [] } = media;
                  return (
                    <div className="content_element">
                      <h3>{title}</h3>
                      {mediaTypes.length > 0 && (
                        <p><span className='has-text-grey mr-2'>Media Types:</span>{mediaTypes.map(mediaType => mediaType.name).join(', ')}</p>
                      )}
                      {genres.length > 0 && (
                        <p><span className='has-text-grey mr-2'>Genres: </span>{genres.map(genre => genre.name).join(', ')}</p>
                      )}
                      {themes.length > 0 && (<p><span className='has-text-grey mr-2'>Themes: </span>{themes.map(theme => theme.name).join(', ')}</p>
                      )}
                      {backgrounds.length > 0 && (
                        <p><span className='has-text-grey mr-2'>Backgrounds: </span>{backgrounds.map(background => background.name).join(', ')}</p>
                      )}
                      {releaseDate && (
                        <p><span className='has-text-grey mr-2'>Released: </span>{new Date(releaseDate).toLocaleDateString()}</p>
                      )}
                      {description && (
                        <p><span className='has-text-grey mr-2'>Description: </span>{description}</p>
                      )}
                      {creatorRoles.length > 0 && (
                        <>
                          <p className='has-text-grey'>Creators:</p>
                          <ul>
                            {creatorRoles.map((creatorRole, index) => (
                              <li key={index}>{`${creatorRole.roleName} - ${creatorRole.firstName} ${creatorRole.lastName}`}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  )
                })
                  : <p>No results</p>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
