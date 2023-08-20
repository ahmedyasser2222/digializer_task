import React from 'react'
import PhotoCard from '../../components/PhotoCard'

const PhotosCards = () => {
  return (
    <div className="flex flex-row flex-wrap ">
        <PhotoCard img="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC83MmJkZDNjNDc1ZjI0ZWJhODVkNjNmMzVlMTFjNWFiMi5qcGVn/webp/800/600" text="Townhomes"/>
        <PhotoCard text="Interiors" img="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9mYWNjMThkMTQzZjlkYmQzOGM2NzIxZDM5MWUxOWY2Ni5qcGVn/webp/800/600" />
        <PhotoCard text="Master Suites" img="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8xYmVmOGZhYmY3MzVlMDRhNTUyYWY4N2M4ODQ1YWY0Ny5qcGVn/webp/800/600" />
        <PhotoCard text="Townhomes" img="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9mYzQxMGQxYjM0MDEzYjEwMDlkYmViMGI4ZmUyZjgxNi5qcGVn/webp/800/600" />
        <PhotoCard text="Plans" img="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8wZmE3M2Y1Zjg0M2JiNjI1NjY5MTQyNjA2ODhjOTcwNS5qcGVn/webp/800/600" />
        <PhotoCard text="Exteriors" img="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9lZjdmODMzNjUyMjczNDY5ZjhiOWExODVhNDFkMWQwMC5qcGVn/webp/800/600" />
    </div>
  )
}

export default PhotosCards