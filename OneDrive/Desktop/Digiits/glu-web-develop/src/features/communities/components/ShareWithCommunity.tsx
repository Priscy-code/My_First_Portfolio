import React, { useState, useRef, useEffect } from 'react';
import FormInput from '../../../components/layouts/FormInput';
import VideoIcon from '../../../assets/icons/video-icon.svg';
import AudioIcon from '../../../assets/icons/audio-icon.svg';
import ImageIcon from '../../../assets/icons/image-icon.svg';
import PlayIcon from '../../../assets/icons/play_icon.svg';
import EmojiIcon from '../../../assets/icons/emoji.svg';
import TrashIcon from '../../../assets/icons/iconoir_trash.svg'
import { useDropzone } from 'react-dropzone';
import { ReactMic, ReactMicStopEvent } from 'react-mic';

// Emoji picker
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

interface Emoji {
    native: string;
}

const ShareWithCommunity: React.FC = () => {
    const [post, setPost] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const pickerRef = useRef<HTMLDivElement>(null);
    const [files, setFiles] = useState<File[]>([]);
    const [filePreviews, setFilePreviews] = useState<{ file: File; preview: string }[]>([]);
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    // handle audio recording
    const startRecording = () => {
        setIsRecording(true);
    }

    const stopRecording = () => {
        setIsRecording(false);
    }

    const onData = (recordedBlob: Blob) => {
        console.log('chunk of real-time data is: ', recordedBlob);  
    }

    const onStop = (recordedData: ReactMicStopEvent) => {
        setAudioUrl(recordedData.blobURL);
        console.log('final data is: ', recordedData.blobURL);  
    }
   
    // handle media files upload
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': [],
            'video/*': []
        },
        onDrop: (acceptedFiles) => {
            const newFilePreviews = acceptedFiles.map(file => ({
                file,
                preview: URL.createObjectURL(file)
            }));
            setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
            setFilePreviews(prevPreviews => [...prevPreviews, ...newFilePreviews]);
        }
    });

    const handleRemoveFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
        setFilePreviews(previews => {
            const newPreviews = [...previews];
            URL.revokeObjectURL(newPreviews[index].preview);
            newPreviews.splice(index, 1);
            return newPreviews;
        });
    };

    useEffect(() => {
        return () => {
            filePreviews.forEach(({ preview }) => URL.revokeObjectURL(preview));
        };
    }, [filePreviews]);

    // handle emoji picker
    const handleEmojiClick = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleEmojiSelect = (emoji: Emoji) => {
        setPost(prevPost => prevPost + emoji.native);
        setShowEmojiPicker(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
            setShowEmojiPicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='p-2 mt-5 relative'>
            <FormInput label='What do you want to share?' isFontNormal={true}>
                <textarea
                    className='w-full py-2 outline-none rounded-lg'
                    placeholder='Enter your message here...'
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                />
            </FormInput>

            <hr className='my-7' />

            {showEmojiPicker && (
                <div ref={pickerRef} style={{ position: 'absolute', bottom: '15%', left: '50%', zIndex: 1000 }}>
                    <Picker
                        data={data}
                        onEmojiSelect={handleEmojiSelect}
                        theme='light'
                    />
                </div>
            )}

            {/* Audio recorder */}
            <div className="mb-4">
                <ReactMic
                    record={isRecording}
                    className="sound-wave"
                    onStop={onStop}
                    onData={onData}
                    strokeColor="#000000"
                    backgroundColor="#FF4081"
                />
                <button onClick={startRecording} type="button">Start</button>
                <button onClick={stopRecording} type="button">Stop</button>
            </div>

            {audioUrl && (
                <div className="flex items-center mb-4 bg-gray-100 p-2 rounded">
                    <audio src={audioUrl} controls className="w-full mr-2" />
                    <button onClick={() => setAudioUrl(null)} className="text-red-600">
                        <img src={TrashIcon} alt="Trash" />
                    </button>
                </div>
            )}

            {/* Uploaded Files Section*/}
            {files.length > 0 && (
                <div>
                    <div className="flex flex-wrap mb-4 gap-8 w-full">
                        {filePreviews.map(({ file, preview }, index) => (
                            <div key={index} className="relative">
                                {file.type.startsWith('image/') ? (
                                    <img
                                        src={preview}
                                        alt={`upload-${index}`}
                                        className="w-40 h-32 object-cover rounded opacity-85"
                                    />
                                ) : (
                                    <div className="w-40 h-32 relative">
                                        <video src={preview} className="w-full h-full object-cover rounded opacity-85" />
                                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                            <img src={PlayIcon} alt="Video" className="w-12 h-12" />
                                        </div>
                                    </div>
                                )}
                                <button
                                    onClick={() => handleRemoveFile(index)}
                                    className="absolute bottom-1 right-0 bg-wine-light text-white rounded-full p-2 h-6 flex items-center justify-center"
                                >
                                    remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <hr className='mb-7' />
                </div>
            )}

            {/* Add to your post section */}
            <div className="flex bg-light-blue rounded-lg justify-between p-3">
                <small>
                    Add to your post
                </small>

                <div className="flex w-1/4 justify-between">
                    <button type="button" onClick={handleEmojiClick}>
                        <img src={EmojiIcon} alt="Emoji" />
                    </button>

                    <div {...getRootProps()}>
                        <input {...getInputProps()} className="hidden" />
                        <button type="button">
                            <img src={VideoIcon} alt="Video" />
                        </button>
                    </div>

                    <button type="button" onClick={startRecording}>
                        <img src={AudioIcon} alt="Audio" />
                    </button>

                    <div {...getRootProps()}>
                        <input {...getInputProps()} className="hidden" />
                        <button type="button">
                            <img src={ImageIcon} alt="Image" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShareWithCommunity;