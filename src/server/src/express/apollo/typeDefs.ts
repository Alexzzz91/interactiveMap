import { gql } from 'apollo-server';

const typeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
  }

  type User {
    id: String!
    username: String!
    name: String!
    email: String!
    phone: String
    position: String
    avatar: String
    division2: String
    department: Department
    chief: String
    mapid: String
    workplaceid: String
    isRemote: Boolean
    isChief: Boolean
    floor: Int
    birthday: String
    entryDate: String
    vacationDates: String
    vacationLeft: Int
  }

  """
  Данные для отдела
  """
  type Department {
    id: String!
    name: String!
    mapid: String
    division: String
    level: Floor,
    staff: [User],
  }

  """
  Данные для этажей
  """
  type Floor {
    id: String!
    name: String!
    fl: Int!
    city: City    
    address: Address
    levelSchema: String!
  }

  type Place {
    id: String!
    name: String!
    mapid: Int
    image: String
    location: String
    type: String
    capacity: Int
    showCapacity: Boolean
    hasTv: Boolean
    hasWindowsPc: Boolean
    hasTable: Boolean
    hasAppleTv: Boolean
    hasBoard: Boolean
    hasCoffeeMachine: Boolean
    hasMicrowave: Boolean
    hasFridge: Boolean
    hasSink: Boolean
    hasArmchair: Boolean
    hasChair: Boolean
    hasCooler: Boolean
    level: Floor
    textDescription: String
  }

  type Poster {
    id: String!
    name: String!
    posterid: Int
    image: String
    level: Floor
    textDescription: String
  }

  type City {
    id: String
    name: String
    textDescription: String
  }

  type Address {
    id: String!
    name: String!
    textDescription: String
    city: City
  }

  type TablesHashes {
    host: String
    collections: String
  }

  type PageInfo {
    hasNext: Boolean
    nextCursor: String
  }

  type UserWithCursor {
    results: [User]
    pageInfo: PageInfo
  }

  type DepartmentsWithCursor {
    results: [Department]
    pageInfo: PageInfo
  }

  type FlorsWithCursor {
    results: [Floor]
    pageInfo: PageInfo
  }

  type Event {
    id: String!
    name: String!
    location: String!
    mapid: Int
    workplaceid: String
    description: String!
    author: String!
    user: [User]
    lastActiveAt: String!
    eventType: String!
    isActual: Boolean
    floorIndex: String
  }

  type Subscription {
    eventCreated: Event
  }

  type Query {
    users: [User]

    moreUsers(
      cursor: String, 
      limit: Int,
    ): UserWithCursor
    
    user(id: String!): User
    userByName(username: String!): User

    departments: [Department]
    moreDepartments(
      cursor: String, 
      limit: Int,
    ): DepartmentsWithCursor
    department(id: String!): Department

    floors: [Floor]
    moreFloors(
      cursor: String, 
      limit: Int,
      city: String,
      address: String,
    ): FlorsWithCursor

    floor(id: String!): Floor
    floorByIndex(index: String!, city: String, address: String): Floor

    places: [Place]
    place(id: String!): Place
    
    posters: [Poster]
    poster(id: String!): Poster
    
    tablesHashes: TablesHashes
    uploads: [File]
    
    events: [Event]

    city(id: String!): City
    cities: [City]

    address(id: String!): Address
    addresses: [Address]

    getAddressesByCity(
      city: String,
    ): [Address]
  }

  type Mutation {
    # удалить как найду доку

    # создание сущности user
    createUser(
      username: String!,
      name: String!,
      phone: String,
      mobile: String,
      skype: String,
      position: String!,
      avatar: String,
      department: String,
    ): User

    # обновление сущности user
    updateUser(
      id: String!,
      mapid: String,
      workplaceid: String,
      floor: String!,
    ): User

    createFCMToken(
      id: String!,
      token: String!,
    ): User

    # удаление сущности user
    deleteUser(id: String!): User

    departmentSetMapId(
      id: String!,
      mapid: String!,
    ): Department

    updateDepartment(
      id: String!,
      mapid: String!,
      floorIndex: String!,
    ): Department
    
    userSetMapId(
      id: String!,
      mapid: String,
      workplaceid: String,
    ): User
    
    userSetFloor(
      id: String!,
      floor: Int!,
    ): User

    placeSetType(place: String!, type: String!, level: String!, itemId: String!): Void

    updateLevelSchema(
      index: String!,
      name: String,
      levelSchema: String!,
      city: String,
      address: String
    ): Floor

    updateOrCreatePlace(
      id: String,
      mapid: String!,
      floorIndex: String!,
      name: String!,
      image: String,
      textDescription: String,
      type: String!,
      showCapacity: Boolean,
      capacity: String,
      hasTv: Boolean,
      hasWindowsPc: Boolean,
      hasTable: Boolean,
      hasAppleTv: Boolean,
      hasBoard: Boolean,
      hasCoffeeMachine: Boolean,
      hasMicrowave: Boolean,
      hasFridge: Boolean,
      hasSink: Boolean,
      hasArmchair: Boolean,
      hasChair: Boolean,
      hasCooler: Boolean,
    ): Place

    updateOrCreatePoster(
      id: String,
      posterid: String!,
      floorIndex: String!,
      name: String!,
      image: String!,
      textDescription: String!,
    ): Poster

    placeUploadImage(file: Upload!): File!

    deletePlace(id: String!): Void

    removeUserWorkplaceId(id: String!): Void
    removeUserMapId(id: String!): Void

    createEvent(  
      name: String!,
      location: String!,
      mapid: String,
      workplaceid: String,
      description: String!,
      eventType: String!,
      floorIndex: String,
      author: String,
    ): Event

    createCity(  
      name: String!,
      textDescription: String!,
    ): City

    createAddress(  
      name: String!,
      textDescription: String!,
      city: String!,
    ): Address
  }

  scalar Upload
  scalar Void
`;

export {
  typeDefs,
};
