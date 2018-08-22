require 'rails_helper'

RSpec.describe 'Payments API', type: :request do

  let(:user) { create(:user) }
  let!(:payments) { create_list(:payment, 10, created_by_id: user.id) }
  let(:payment_id) { payments.first.id }
  let(:headers) { valid_headers }

  describe 'GET /payments' do
    before { get '/payments', headers: headers }

    it 'returns payments' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'should return 200' do
      expect(response).to have_http_status(200)
    end

  end

  describe 'GET /payments/:id' do
    before { get "/payments/#{payment_id}", headers: headers }

    context 'when the record exists' do
      it 'returns the payments' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(payment_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status 200
      end
    end

    context 'when the record does not exists' do

      let(:payment_id) { 10000 }

      it 'returns status code 404' do
        expect(response).to have_http_status 404
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Payment/)
      end
    end
  end

  describe 'POST /payments' do
    let(:current_date) { Date.current }
    let(:valid_attributes) do
      { concept: 'Foo',
        quantity: '100',
        date: current_date }.to_json
    end

    context 'when request is valid' do
      before { post '/payments', params: valid_attributes, headers: headers }

      it 'creates a payment' do
        expect(json['concept']).to eq('Foo')
        expect(json['quantity']).to eq(100)
        expect(Date.parse(json['date'])).to eq(current_date)
      end

      it 'returns status code 201' do
        expect(response).to have_http_status 201
      end
    end

    context 'when request is invalid' do
      before { post '/payments', params: { concept: 'Foo' }.to_json, headers: headers }

      it 'should return status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'should return a validation failure message' do
        expect(response.body)
          .to match(/Validation failed:.+Quantity can't be blank/)
      end
    end
  end

  describe 'PUT /payments/:id' do
    let(:valid_attributes) { { concept: 'New Concept' }.to_json }

    context 'when the record exists' do
      before { put "/payments/#{payment_id}", params: valid_attributes, headers: headers }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'should return status code 204' do
        expect(response).to have_http_status 204
      end
    end
  end

  describe 'DELETE /payments/:id' do
    before { delete "/payments/#{payment_id}", headers: headers }

    it 'should return 204 status code' do
      expect(response).to have_http_status 204
    end

  end
end