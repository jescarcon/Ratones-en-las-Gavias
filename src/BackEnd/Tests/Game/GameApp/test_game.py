# import pytest
# from rest_framework import status
# from django.urls import reverse
# from rest_framework.test import APIClient
# from django.contrib.auth import get_user_model
# from Apps.Game.GameApp.models import Game

# User = get_user_model()

# @pytest.mark.django_db
# class TestGameViews:

#     @pytest.fixture
#     def api_client(self):
#         """
#         Proporciona un cliente API para realizar las solicitudes.
#         """
#         return APIClient()

#     @pytest.fixture
#     def create_user(self):
#         """
#         Crea un usuario para las pruebas.
#         """
#         return User.objects.create_user(username='testuser', password='password123', email='test@example.com')

#     @pytest.fixture
#     def create_game(self, create_user):
#         """
#         Crea un juego asociado al usuario.
#         """
#         return Game.objects.create(
#             name="Test Game",
#             system="5th Edition",
#             genre="Fantasy",
#             duration="3-4 hours",
#             difficulty="Principiante",
#             players="4-6",
#             game_mode="Presencial en Mesa",
#             location="Local Game Store",
#             status="Por Iniciar",
#             master=create_user,
#         )

#     def test_create_game(self, api_client, create_user):
#         """
#         Prueba que un usuario autenticado pueda crear un nuevo juego.
#         """
#         api_client.force_authenticate(user=create_user)
#         url = reverse('game-list')  # URL para crear juegos
#         data = {
#             'name': 'New Game',
#             'system': '5th Edition',
#             'genre': 'Fantasy',
#             'duration': '3-4 hours',
#             'difficulty': 'Principiante',
#             'players': '4-6',
#             'game_mode': 'Presencial en Mesa',
#             'location': 'Local Game Store',
#             'status': 'Por Iniciar',
#         }
#         response = api_client.post(url, data)
#         assert response.status_code == status.HTTP_201_CREATED
#         assert Game.objects.filter(name='New Game').exists()

#     def test_list_games(self, api_client, create_user, create_game):
#         """
#         Prueba que un usuario autenticado pueda listar todos los juegos.
#         """
#         api_client.force_authenticate(user=create_user)
#         url = reverse('game-list')  # URL para listar juegos
#         response = api_client.get(url)
#         assert response.status_code == status.HTTP_200_OK
#         assert len(response.data) == 1
#         assert create_game.name in [game['name'] for game in response.data]

#     def test_get_game_by_id(self, api_client, create_user, create_game):
#         """
#         Prueba que un usuario autenticado pueda obtener un juego por su ID.
#         """
#         api_client.force_authenticate(user=create_user)
#         url = reverse('game-detail', kwargs={'pk': create_game.pk})  # URL para obtener juego por ID
#         response = api_client.get(url)
#         assert response.status_code == status.HTTP_200_OK
#         assert response.data['name'] == create_game.name

#     def test_update_game(self, api_client, create_user, create_game):
#         """
#         Prueba que un usuario autenticado pueda actualizar un juego.
#         """
#         api_client.force_authenticate(user=create_user)
#         url = reverse('game-detail', kwargs={'pk': create_game.pk})  
#         data = {
#             'name': 'Updated Game',
#             'system': 'Pathfinder',
#             'genre': 'Fantasy',
#             'duration': '4-6 hours',
#             'difficulty': 'Intermedio',
#             'players': '5-7',
#             'game_mode': 'Online',
#             'location': 'Virtual Tabletop',
#             'status': 'En Curso',
#         }
#         response = api_client.put(url, data)
#         assert response.status_code == status.HTTP_200_OK
#         create_game.refresh_from_db()
#         assert create_game.name == 'Updated Game'

#     def test_delete_game(self, api_client, create_user, create_game):
#         """
#         Prueba que un usuario autenticado pueda eliminar un juego.
#         """
#         api_client.force_authenticate(user=create_user)
#         url = reverse('game-detail', kwargs={'pk': create_game.pk})  # URL para eliminar un juego
#         response = api_client.delete(url)
#         assert response.status_code == status.HTTP_204_NO_CONTENT
#         assert not Game.objects.filter(id=create_game.id).exists()

#     def test_create_game_unauthenticated(self, api_client):
#         """
#         Prueba que un usuario no autenticado no pueda crear un juego.
#         """
#         url = reverse('game-list')
#         data = {
#             'name': 'Unauthenticated Game',
#             'system': '5th Edition',
#             'genre': 'Fantasy',
#             'duration': '3-4 hours',
#             'difficulty': 'Principiante',
#             'players': '4-6',
#             'game_mode': 'Presencial en Mesa',
#             'location': 'Local Game Store',
#             'status': 'Por Iniciar',
#         }
#         response = api_client.post(url, data)
#         assert response.status_code == status.HTTP_401_UNAUTHORIZED
