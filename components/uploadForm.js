import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react'

export default function UploadForm() {
	const [files, setFiles] = useState([]);
	let fileInput = useRef();

	const uploadFiles = async (ev) => {
		const config = {
			headers: { 'content-type': 'multipart/form-darta' },
			onUploadProgress: (event) => {
				console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
			},
		};

		const formData = new FormData();

		Array.from(files).forEach((file) => {
			formData.append('files', file);
		});

		const response = await axios.post('/api/image/upload', formData, config);

		setFiles([]);
	};

	const handleFilesChange = (ev) => {
		setFiles(ev.target.files);
	}

	const handleDropzoneClick = (ev) => {
		ev.preventDefault();
		fileInput.current.click();
	}

	const imagePreviews = () => {
		const imageArray = [];
		for (let i = 0; i < files.length; i++) {
			imageArray.push(<>
				<img src={URL.createObjectURL(files[i])} alt="ImagePreview" />
			</>)
		}

		return imageArray;
	}

	useEffect(() => {


		return () => {

		}
	}, [files])


	return (
		<>
			<div className='upload-component'>
				<h1 className='upload-files-header'>Upload files to Postrai</h1>
				<input ref={fileInput} type='file' onChange={handleFilesChange} multiple hidden accept='image/*' />

				<div className='uploadZone'>
					<button className='chooseFilesButton' onClick={handleDropzoneClick} ><span>Choose files here...</span></button>
					<button className='uploadFilesButton' onClick={uploadFiles}><span>Upload files</span></button>
				</div>
				<div className='filePreview'>
					{imagePreviews()}
				</div>
			</div>
		</>
	)
}