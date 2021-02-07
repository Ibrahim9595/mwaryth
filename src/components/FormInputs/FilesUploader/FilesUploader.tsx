
import React, { useState, useRef } from 'react';
import './FilesUploader.css';
import { Button, Loader } from 'semantic-ui-react';

export interface IFilesUploaderProps {
    files?: string[];
    baseUrl: string;
    minCount: number;
    handleUpload: (files: File[]) => Promise<string[]>;
    onChange: (files: string[]) => void;
}

export const FilesUploader = ({ files, handleUpload, onChange, minCount, baseUrl }: IFilesUploaderProps) => {
    const [fileState, setFileState] = useState((files || [])
        .map(file => ({ src: file, uploading: false })));

    const fileRef = useRef({} as any);

    const openFileDialog = () => fileRef.current.click();

    const handleChange = (e: any) => {
        const files = Array.from(e.target.files);
        const oldState = fileState.slice(0);

        const newState = [
            ...oldState,
            ...files.map((file: any) => ({ src: window.URL.createObjectURL(file), uploading: true }))
        ];

        setFileState(newState);

        handleUpload(e.target.files).then(resFiles => {
            const finalState = [
                ...oldState,
                ...resFiles.map((file: any) => ({ src: file, uploading: false }))
            ];
            onChange(finalState.map(el => el.src));
            setFileState(finalState);
        }).catch(err => {
            alert(err);
            onChange(oldState.map(el => el.src));
            setFileState(oldState);
        });
    }

    const handleDelete = (id: number, src: string) => () => {
        const finalState = fileState.filter((_, i) => i !== id);
        setFileState(finalState);
        onChange(finalState.map(el => el.src));
    }

    return (
        <div className='flex-container'>
            <div className="files-uploader-wrapper">
                {fileState.map((file, i) => (
                    <div className="img-card" key={i}>
                        <div className='overlay'>
                            {
                                file.uploading ?
                                    <Loader active inline='centered' size='huge' inverted>uploading...</Loader>
                                    :
                                    <Button
                                        onClick={handleDelete(i, file.src)}
                                        circular color='red' size='tiny' basic icon='trash' className='remove-icon'
                                    />
                            }
                        </div>
                        <img src={`${baseUrl}/${file.src}`} alt='file' />
                    </div>
                ))}
                {fileState.length === 0 && <p>Upload at least {minCount} images</p>}
            </div>

            <Button title='upload images' className='add-button' icon='upload' onClick={openFileDialog} color='teal' />

            <input ref={fileRef} id='file-input' type='file'
                onChange={handleChange} accept='image/*' multiple
                style={{ display: 'none' }} />
        </div>
    );
}