## adrian mui, peoplegrove, top sekrit stuff

## Purpose
i wanna know what's for lunch. slack integration.

node_/express_/passport/mongo_/slack/webpack/react?

## Getting Started

```
  npm install
  npm build
  npm start
```

## Schema: user, (food)place, (food)type, opinion, history

```
  user:
    _id:
    pg_email: string // must have peoplGroveEmail
    google_auth_token: string // passport will handle this

  place:
    _id:
    types: [collection]

    > has_many place_type
    > has_many history

  type:
    _id:
    description: string

    > has_many place_type

  place_type:
    _id:
    type_id: 
    place_id: 

    > collection

  opinion:
    _id:
    rating: int
    comment: string
    user_id:
    history_id:

    > belongs_to user
    > belongs_to history

  history:
    _id:
    date:
    cumulative_rating: float
    place_id:

    > belongs_to place
    > has_many opinion
```
  

