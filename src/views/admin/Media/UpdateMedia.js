import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const UpdateMedia = ({ medias, mediaTypeOptions, setLastChangeOccured }) => {

  const [mediaId, setMediaId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [mediaTypeIds, setMediaTypeIds] = useState([]);
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
          mediaTypeIds,
        },
        DEFAULT_AXIOS_OPTIONS
      )
        .then(() => {
          setResponseMessage('Success');
          setLastChangeOccured(new Date());
          setMediaId('');
          setTitle('');
          setDescription('');
          setReleaseDate(null);
        })
        .catch((error) => {
          setResponseMessage('Error');
          console.error("error", error)
        });
    }
  }

  useEffect(() => {
    if (mediaId !== '') {
      // get media fields
      axios.get(
        `${BASE_API_URL}/media/${mediaId}`,
        DEFAULT_AXIOS_OPTIONS
      )
        .then((res) => {
          const { title, description, releaseDate, mediaTypes } = res.data;
          setTitle(title);
          setDescription(description);
          setReleaseDate(releaseDate);
          setMediaTypeIds(mediaTypes.map(mediaType => mediaType.id));
        })
        .catch((error) => {
          console.error("error", error)
        });
    } else {
      setTitle('');
      setDescription('');
      setReleaseDate('');
      setMediaTypeIds([])
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
      </div >
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
          class="textarea"
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
        <p>Media Type</p>
        <Select
          value={mediaTypeOptions.filter(option => mediaTypeIds.includes(option.value)) || null}
          onChange={selectedOptions => setMediaTypeIds(selectedOptions.map(selectedOption => selectedOption?.value))}
          options={mediaTypeOptions}
          isMulti
          isClearable={true}
          isSearchable={true}
        />
      </div >
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