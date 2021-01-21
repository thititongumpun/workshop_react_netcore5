FROM golang:1.16

WORKDIR /src
COPY . .
RUN go build -o /out/go-api
COPY --from=build /out/go-api /