const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male presenting',
    lookingFor: 'female presenting',
    location: 'Portland, OR',
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    name: 'Jane Doe',
    age: 26,
    gender: 'female presenting',
    lookingFor: 'male presenting',
    location: 'Beaverton, OR',
    image: 'https://randomuser.me/api/portraits/women/82.jpg',
  },
  {
    name: 'Mike Smith',
    age: 38,
    gender: 'male presenting',
    lookingFor: 'male presenting',
    location: 'Gresham, OR',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
  },
  {
    name: 'Dugan Nash',
    age: 43,
    gender: 'non binary',
    lookingFor: 'any',
    location: 'Hillsboro, OR',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    name: 'Janet Smunt',
    age: 50,
    gender: 'female presenting',
    lookingFor: 'female presenting',
    location: 'Tigard, OR',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group>"
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
  </ul>`;

    document.getElementById(
      'imageDisplay'
    ).innerHTML = `<img class="rounded-circle" src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
