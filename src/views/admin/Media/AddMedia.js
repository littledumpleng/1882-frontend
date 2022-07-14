import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';
import { CreatorRolesForMedia } from './CreatorRolesForMedia';

export const AddMedia = ({ mediaTypeOptions, genreOptions, themeOptions, backgroundOptions, creatorOptions, roleOptions, setLastChangeOccured }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [mediaTypes, setMediaTypes] = useState([]);
  const [genres, setGenres] = useState([]);
  const [themes, setThemes] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);
  const [creatorRoles, setCreatorRoles] = useState([]);
  const [responseMessage, setResponseMessage] = useState(null);

  const onCreateClick = () => {
    if (window.confirm(`Are you sure that you want to create?`)) {
      setResponseMessage('...Processing');

      axios.post(
        `${BASE_API_URL}/media`,
        {
          title,
          description,
          releaseDate,
          mediaTypeIds: mediaTypes.map(mediaType => mediaType?.value),
          genreIds: genres.map(genre => genre?.value),
          themeIds: themes.map(theme => theme?.value),
          backgroundIds: backgrounds.map(background => background?.value),
          creatorRoles: creatorRoles.map(creatorRole => ({
            creatorId: creatorRole.creator.value,
            roleId: creatorRole.role.value,
          }))
        },
        DEFAULT_AXIOS_OPTIONS
      )
        .then(() => {
          setResponseMessage('Success');
          setLastChangeOccured(new Date());
          setTitle('');
          setDescription('');
          setReleaseDate('');
          setMediaTypes([]);
          setGenres([]);
          setThemes([]);
          setBackgrounds([]);
        })
        .catch((error) => {
          setResponseMessage('Error');
          console.error("error", error)
        });
    }
  }

  return (
    <>
      <h3 className='has-text-left is-size-4'>Add Media</h3>
      <div className="column is-one-third">
        <input
          className="input"
          type='text'
          placeholder='Media title'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </div>
      <div className="column is-one-third">
        <textarea
          className="textarea"
          placeholder='Media description'
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </div>
      <div className="column is-one-third">
        <p>Release Date</p>
        <input
          className="input"
          type="date"
          value={releaseDate}
          onChange={event => setReleaseDate(event.target.value)}
        />
      </div>
      <div className="column is-one-third">
        <p>Media Types</p>
        <Select
          value={mediaTypes}
          onChange={selectedOptions => setMediaTypes(selectedOptions)}
          options={mediaTypeOptions}
          isMulti
          isClearable={true}
          isSearchable={true}
        />
      </div>
      <div className="column is-one-third">
        <p>Genres</p>
        <Select
          value={genres}
          onChange={selectedOptions => setGenres(selectedOptions)}
          options={genreOptions}
          isMulti
          isClearable={true}
          isSearchable={true}
        />
      </div>
      <div className="column is-one-third">
        <p>Themes</p>
        <Select
          value={themes}
          onChange={selectedOptions => setThemes(selectedOptions)}
          options={themeOptions}
          isMulti
          isClearable={true}
          isSearchable={true}
        />
      </div>
      <div className="column is-one-third">
        <p>Backgrounds</p>
        <Select
          value={backgrounds}
          onChange={selectedOptions => setBackgrounds(selectedOptions)}
          options={backgroundOptions}
          isMulti
          isClearable={true}
          isSearchable={true}
        />
      </div>
      <CreatorRolesForMedia
        creatorOptions={creatorOptions}
        roleOptions={roleOptions}
        creatorRoles={creatorRoles}
        setCreatorRoles={setCreatorRoles}
      />
      <div className="column">
        <button
          className="button is-info"
          disabled={title === ''}
          onClick={onCreateClick}
        >
          Create
        </button>
      </div>
      <p>{responseMessage ?? ''}</p>
    </>
  )
}