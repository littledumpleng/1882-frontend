import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';
import { CreatorRolesForMedia } from './CreatorRolesForMedia';

export const UpdateMedia = ({ medias, mediaTypeOptions, genreOptions, themeOptions, backgroundOptions, creatorOptions, roleOptions, setLastChangeOccured }) => {

  const [mediaId, setMediaId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [mediaTypes, setMediaTypes] = useState([]);
  const [genres, setGenres] = useState([]);
  const [themes, setThemes] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);
  const [creatorRoles, setCreatorRoles] = useState([]);
  const [responseMessage, setResponseMessage] = useState(null);

  const onUpdateClick = () => {
    if (window.confirm(`Are you sure that you want to update?`)) {
      setResponseMessage('...Processing');

      axios.put(
        `${BASE_API_URL}/media/${mediaId}`,
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
          setMediaId('');
        })
        .catch((error) => {
          setResponseMessage('Error');
          console.error("error", error)
        });
    }
  }

  useEffect(() => {
    if (mediaId && mediaId !== '') {
      // get media fields
      axios.get(
        `${BASE_API_URL}/media/${mediaId}`,
        DEFAULT_AXIOS_OPTIONS
      )
        .then((res) => {
          const { title, description, releaseDate, mediaTypes, genres, themes, backgrounds, creatorRoles } = res.data;
          setTitle(title);
          setDescription(description);
          setReleaseDate(releaseDate);
          setMediaTypes(mediaTypes.map(mediaType => ({ value: mediaType.id, label: mediaType.name })));
          setGenres(genres.map(genre => ({ value: genre.id, label: genre.name })));
          setThemes(themes.map(theme => ({ value: theme.id, label: theme.name })));
          setBackgrounds(backgrounds.map(background => ({ value: background.id, label: background.name })));
          setCreatorRoles(creatorRoles.map(creatorRole => ({
            creator: {
              value: creatorRole.creatorId,
              label: `${creatorRole.firstName} ${creatorRole.lastName}`
            },
            role: {
              value: creatorRole.roleId,
              label: creatorRole.roleName
            }
          })));
        })
        .catch((error) => {
          console.error("error", error)
        });
    } else {
      setTitle('');
      setDescription('');
      setReleaseDate('');
      setMediaTypes([]);
      setGenres([]);
      setThemes([]);
      setBackgrounds([]);
      setCreatorRoles([]);
    }
  }, [mediaId]);

  const selectOptions = medias.map(media => ({
    value: media.id,
    label: `${media.title} (id: ${media.id})`
  }));

  const selectValue = selectOptions.find(option => option.value === mediaId);

  return (
    <>
      <h3 className='has-text-left is-size-4'>Edit Media</h3>
      <div className="column is-one-third">
        <p>Media</p>
        <Select
          value={selectValue || null}
          onChange={selectedOption => setMediaId(selectedOption?.value)}
          options={selectOptions}
          isClearable={true}
          isSearchable={true}
        />
      </div>
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
      <div className="column is-one-third">
        <button
          className="button is-primary"
          disabled={mediaId === null || title === ''}
          onClick={onUpdateClick}
        >
          Update
        </button>
      </div>
      <p>{responseMessage ?? ''}</p>
    </>
  )
}